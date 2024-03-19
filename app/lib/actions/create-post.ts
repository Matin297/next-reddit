"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { db } from "@/app/lib/prisma";
import { pathnames } from "@/app/lib/paths";

const CreatePostSchema = z
  .object({
    title: z.string().min(3),
    content: z.string().min(10),
    slug: z.string(),
  })
  .required();

interface PostFormState {
  message?: string;
  errors?: {
    title?: string[];
    content?: string[];
  };
}

export async function createPost(
  _: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  const validationResult = CreatePostSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validationResult.success) {
    return {
      message: "Validation Error!",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const data = await auth();

  if (!data || !data.user || !data.user.id) {
    return {
      message: "Unauthenticated Request!",
    };
  }

  const topic = await db.topic.findUnique({
    where: {
      slug: validationResult.data.slug,
    },
  });

  if (!topic) {
    return {
      message: "Topic is invalid!",
    };
  }

  let post;
  try {
    post = await db.post.create({
      data: {
        topicId: topic.id,
        userId: data.user.id,
        title: validationResult.data.title,
        content: validationResult.data.content,
      },
    });
  } catch (error) {
    return {
      message: "Server Error: Failed to create the post!",
    };
  }

  revalidatePath(pathnames.topic(validationResult.data.slug));
  redirect(pathnames.post(validationResult.data.slug, post.id));
}

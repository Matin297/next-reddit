"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/app/lib/prisma";
import { pathnames } from "@/app/lib/paths";

const CreateCommentSchema = z
  .object({
    slug: z.string(),
    postId: z.string(),
    content: z.string().min(3),
  })
  .required();

interface CommentFormState {
  message?: string;
  errors?: {
    content?: string[];
  };
}

export async function createComment(_: CommentFormState, formData: FormData) {
  const validationResult = CreateCommentSchema.safeParse(
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

  const { slug, postId, content } = validationResult.data;

  try {
    await db.comment.create({
      data: {
        postId,
        content,
        userId: data.user.id,
      },
    });
  } catch (error) {
    return {
      message: "Server Error: Failed to add the comment!",
    };
  }

  // revalidate that specific post page
  revalidatePath(pathnames.post(slug, postId));

  return {};
}

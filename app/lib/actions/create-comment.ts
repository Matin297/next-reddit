"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/app/lib/prisma";
import { pathnames } from "@/app/lib/paths";

const CreateCommentSchema = z
  .object({
    postId: z.string(),
    content: z.string().min(3),
    parentId: z.string(),
  })
  .partial({
    parentId: true,
  });

interface CommentFormState {
  message?: string;
  errors?: {
    content?: string[];
  };
  lastSuccessfulSubmit?: number;
}

export async function createComment(
  _: CommentFormState,
  formData: FormData
): Promise<CommentFormState> {
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

  const { postId, content, parentId } = validationResult.data;

  try {
    await db.comment.create({
      data: {
        postId,
        content,
        userId: data.user.id,
        ...(parentId && { parentId }),
      },
    });
  } catch (error) {
    return {
      message: "Server Error: Failed to add the comment!",
    };
  }

  const topic = await db.topic.findFirst({
    where: {
      posts: {
        some: {
          id: postId,
        },
      },
    },
  });

  if (!topic) {
    return {
      message: "Invalid Post!",
    };
  }

  // revalidate that specific post page
  revalidatePath(pathnames.post(topic.slug, postId));

  return {
    lastSuccessfulSubmit: Date.now(),
  };
}

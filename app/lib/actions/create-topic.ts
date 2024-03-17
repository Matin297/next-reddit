"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { db } from "@/app/lib/prisma";
import { pathnames } from "@/app/lib/paths";

const CreateTopicSchema = z.object({
  slug: z.string().regex(/^[a-z-]{3,}$/, {
    message: "Must be a combination of letters/dashed of at least 3 characters",
  }),
  description: z.string().min(10),
});

interface TopicFormState {
  message?: string;
  errors?: {
    slug?: string[];
    description?: string[];
  };
}

export async function createTopic(
  _: TopicFormState,
  formData: FormData
): Promise<TopicFormState> {
  const validationResult = CreateTopicSchema.safeParse({
    slug: formData.get("slug"),
    description: formData.get("description"),
  });

  if (!validationResult.success) {
    return {
      message: "Validation Error!",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const data = await auth();

  if (!data || !data.user) {
    return {
      message: "Unauthenticated Request!",
    };
  }

  try {
    await db.topic.create({
      data: {
        slug: validationResult.data.slug,
        description: validationResult.data.description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    }

    return {
      message: "Server Error: Failed to create the topic!",
    };
  }

  revalidatePath("/");
  redirect(pathnames.topic(validationResult.data.slug));
}

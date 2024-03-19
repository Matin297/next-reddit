"use client";

import { useFormState } from "react-dom";
import { Input, Textarea } from "@nextui-org/react";
import { createPost } from "@/app/lib/actions";
import Alert from "@/app/components/alert";
import FormButton from "@/app/components/form-button";

interface PostCreationProps {
  params: {
    slug: string;
  };
}

export default function PostCreation({ params: { slug } }: PostCreationProps) {
  const [state, action] = useFormState(createPost, {});

  return (
    <form className="space-y-6 max-w-lg mx-auto" action={action}>
      <Alert message={state.message} />
      <h2 className="font-semibold">Post</h2>
      <input type="hidden" value={slug} name="slug" />
      <Input
        variant="bordered"
        label="Title"
        name="title"
        required
        isInvalid={Boolean(state.errors?.title)}
        errorMessage={state.errors?.title?.join(", ")}
      />
      <Textarea
        variant="bordered"
        label="Content"
        name="content"
        required
        isInvalid={Boolean(state.errors?.content)}
        errorMessage={state.errors?.content?.join(", ")}
      />
      <FormButton />
    </form>
  );
}

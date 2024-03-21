"use client";

import { useFormState } from "react-dom";
import { Textarea } from "@nextui-org/react";
import { createComment } from "@/app/lib/actions";
import FormButton from "@/app/components/form-button";
import Alert from "@/app/components/alert";

interface CommentFormProps {
  postID: string;
  slug: string;
}

export default function CommentForm({ postID, slug }: CommentFormProps) {
  const [state, action] = useFormState(createComment, {});

  return (
    <form action={action} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">What are you thoughts?</h2>
      <Alert message={state.message} />
      <Textarea
        required
        variant="bordered"
        name="content"
        label="Comment"
        isInvalid={Boolean(state.errors?.content)}
        errorMessage={state.errors?.content?.join(", ")}
      />
      <input type="hidden" name="postId" value={postID} />
      <input type="hidden" name="slug" value={slug} />
      <FormButton className="w-auto self-end" />
    </form>
  );
}

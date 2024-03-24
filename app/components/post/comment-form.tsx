"use client";

import { useRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Textarea, Button } from "@nextui-org/react";
import { createComment } from "@/app/lib/actions";
import FormButton from "@/app/components/form-button";
import Alert from "@/app/components/alert";

interface CommentFormProps {
  postID: string;
  parentId?: string;
  mode: "comment" | "reply";
}

export default function CommentForm({
  mode,
  postID,
  parentId,
}: CommentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isOpen, setIsOpen] = useState(mode === "comment");
  const [state, action] = useFormState(createComment, {});

  useEffect(() => {
    if (state.lastSuccessfulSubmit) {
      formRef.current?.reset();

      if (mode === "reply") {
        setIsOpen(false);
      }
    }
  }, [state.lastSuccessfulSubmit, mode]);

  if (!isOpen && mode === "reply") {
    return (
      <Button
        color="primary"
        variant="bordered"
        className="self-end"
        onClick={() => setIsOpen(true)}
      >
        Reply
      </Button>
    );
  }

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-4">
      {mode === "comment" && (
        <h2 className="text-lg font-semibold">What are you thoughts?</h2>
      )}
      <Alert message={state.message} />
      <Textarea
        required
        name="content"
        label="Comment"
        isInvalid={Boolean(state.errors?.content)}
        errorMessage={state.errors?.content?.join(", ")}
      />
      <input type="hidden" name="postId" value={postID} required />
      {parentId && (
        <input type="hidden" name="parentId" value={parentId} required />
      )}

      <div className="space-x-4 self-end">
        {mode === "reply" && (
          <Button
            variant="light"
            color="danger"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        )}
        <FormButton className="w-auto" />
      </div>
    </form>
  );
}

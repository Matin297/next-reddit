"use client";

import { useFormState } from "react-dom";
import { Input, Textarea, Button } from "@nextui-org/react";
import { createTopic } from "@/app/lib/actions";
import Alert from "@/app/components/alert";
import FormButton from "@/app/components/form-button";

export default function TopicCreation() {
  const [state, action] = useFormState(createTopic, {});

  return (
    <form className="space-y-6 max-w-lg mx-auto" action={action}>
      <Alert message={state.message} />
      <h2 className="font-semibold">Topic</h2>
      <Input
        variant="bordered"
        label="Title"
        name="slug"
        required
        isInvalid={Boolean(state.errors?.slug)}
        errorMessage={state.errors?.slug?.join(", ")}
      />
      <Textarea
        variant="bordered"
        label="Description"
        name="description"
        required
        isInvalid={Boolean(state.errors?.description)}
        errorMessage={state.errors?.description?.join(", ")}
      />
      <FormButton />
    </form>
  );
}

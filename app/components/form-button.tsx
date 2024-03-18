import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      color="primary"
      className="w-full"
      type="submit"
      aria-disabled={pending}
      isLoading={pending}
    >
      Submit
    </Button>
  );
}

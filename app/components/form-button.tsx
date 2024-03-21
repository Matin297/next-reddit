import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  className?: string;
}

export default function FormButton({ className = "" }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      color="primary"
      className={`w-full ${className}`}
      type="submit"
      aria-disabled={pending}
      isLoading={pending}
    >
      Submit
    </Button>
  );
}

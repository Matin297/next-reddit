"use client";

import { Button } from "@nextui-org/react";
import {
  ExclamationCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-md m-auto border border-2 border-red-500 rounded-xl p-4">
      <h2 className="text-xl font-semibold rounded-xl text-red-500 flex gap-2">
        <ExclamationCircleIcon width={25} /> Something went wrong!
      </h2>
      <p>{error.message}</p>
      <Button className="self-center" color="primary" onClick={() => reset()}>
        Try again <ArrowPathIcon width={15} />
      </Button>
    </div>
  );
}

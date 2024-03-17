import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function Alert({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="bg-red-500 text-white p-2 rounded-xl flex items-center gap-2 text-sm">
      <ExclamationCircleIcon width={25} />
      {message}
    </div>
  );
}

import { Skeleton } from "@nextui-org/react";

export default function CommentListSkeleton() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">
        Comments
        <span>(</span>
        <Skeleton className="inline-block h-3 w-[20px] rounded-md bg-default-300" />
        <span>)</span>
      </h2>
      <ul className="space-y-4">
        <li className="space-y-3 border p-4">
          <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
        </li>
        <li className="space-y-3 border p-4">
          <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
        </li>
        <li className="space-y-3 border p-4">
          <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
        </li>
        <li className="space-y-3 border p-4">
          <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
        </li>
        <li className="space-y-3 border p-4">
          <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
          <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
        </li>
      </ul>
    </section>
  );
}

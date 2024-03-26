import { Skeleton } from "@nextui-org/react";

export default function PostListSkeleton() {
  return (
    <div className="flex-1 divide-y">
      <div className="space-y-3 py-3">
        <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
      </div>
      <div className="space-y-3 py-3">
        <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
      </div>
      <div className="space-y-3 py-3">
        <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
      </div>
      <div className="space-y-3 py-3">
        <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
      </div>
      <div className="space-y-3 py-3">
        <Skeleton className="h-4 w-1/6 rounded-lg bg-default-300" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-full rounded-lg bg-default-200" />
        <Skeleton className="h-3 w-2/5 rounded-lg bg-default-200" />
      </div>
    </div>
  );
}

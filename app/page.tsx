import { Suspense } from "react";
import Link from "next/link";
import { fetchTopPosts } from "@/app/lib/data";
import { Button } from "@nextui-org/react";
import { pathnames } from "@/app/lib/paths";
import { PlusIcon } from "@heroicons/react/24/outline";
import TopicList from "@/app/components/home/topic-list";
import PostList from "@/app/components/post-list";
import PostListSkeleton from "@/app/components/post-list-skeleton";

export default function Home() {
  return (
    <section className="flex gap-4">
      <Suspense fallback={<PostListSkeleton />}>
        <PostList fetchPosts={fetchTopPosts} />
      </Suspense>
      <aside className="space-y-4 basis-1/4 flex flex-col">
        <Button
          as={Link}
          color="primary"
          className="self-end"
          href={pathnames.topicCreation()}
        >
          <PlusIcon width={20} />
          Create Topic
        </Button>
        <TopicList />
      </aside>
    </section>
  );
}

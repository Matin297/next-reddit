import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { pathnames } from "@/app/lib/paths";
import { fetchPostsBySlug } from "@/app/lib/data";
import PostList from "@/app/components/post-list";
import PostListSkeleton from "@/app/components/post-list-skeleton";
import TopicDescription from "@/app/components/topic/description";

interface TopicProps {
  params: {
    slug: string;
  };
}

export default function Topic({ params: { slug } }: TopicProps) {
  return (
    <section className="flex gap-4">
      <Suspense fallback={<PostListSkeleton />}>
        <PostList fetchPosts={fetchPostsBySlug.bind(null, slug)} />
      </Suspense>
      <aside className="space-y-4 basis-1/4 flex flex-col">
        <Button
          as={Link}
          color="primary"
          className="self-end"
          href={pathnames.postCreation(slug)}
        >
          <PlusIcon width={20} />
          Create Post
        </Button>
        <TopicDescription slug={slug} />
      </aside>
    </section>
  );
}

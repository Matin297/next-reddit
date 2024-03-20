import Link from "next/link";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { pathnames } from "@/app/lib/paths";
import { fetchPostsBySlug } from "@/app/lib/data";
import PostList from "@/app/components/topic/post-list";

interface TopicProps {
  params: {
    slug: string;
  };
}

export default function Topic({ params: { slug } }: TopicProps) {
  return (
    <section className="flex gap-4">
      <PostList fetchPosts={fetchPostsBySlug.bind(null, slug)} />
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
        <section className="border p-3 rounded-lg">
          <h2 className="text-lg font-semibold capitalize mb-4">{slug}</h2>
          <p>Here goes the topic description</p>
        </section>
      </aside>
    </section>
  );
}

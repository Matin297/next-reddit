import Link from "next/link";
import { Button } from "@nextui-org/react";
import { pathnames } from "@/app/lib/paths";
import { PlusIcon } from "@heroicons/react/24/outline";

interface TopicProps {
  params: {
    slug: string;
  };
}

export default function Topic({ params: { slug } }: TopicProps) {
  return (
    <section className="flex">
      <ul className="flex-1">
        <li>Here goes the list of posts</li>
      </ul>
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

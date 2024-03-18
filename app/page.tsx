import Link from "next/link";
import { Button } from "@nextui-org/react";
import { pathnames } from "@/app/lib/paths";
import { PlusIcon } from "@heroicons/react/24/outline";
import TopicList from "@/app/components/home/topic-list";

export default function Home() {
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

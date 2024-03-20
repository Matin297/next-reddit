import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { fetchTopics } from "@/app/lib/data";
import { pathnames } from "@/app/lib/paths";

export default async function TopicList() {
  const topics = await fetchTopics();

  return (
    <section className="border rounded-lg p-3">
      <h2 className="text-lg font-semibold mb-4">Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              underline="hover"
              as={NextLink}
              href={pathnames.topic(topic.slug)}
              className="capitalize"
            >
              {topic.slug}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

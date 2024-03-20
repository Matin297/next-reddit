import { notFound } from "next/navigation";
import { fetchTopicBySlug } from "@/app/lib/data";

interface TopicDescriptionProps {
  slug: string;
}

export default async function TopicDescription({
  slug,
}: TopicDescriptionProps) {
  const topic = await fetchTopicBySlug(slug);

  if (!topic) {
    return notFound();
  }

  return (
    <section className="border p-3 rounded-lg">
      <h2 className="text-lg font-semibold capitalize mb-4">{slug}</h2>
      <p className="text-sm">{topic.description}</p>
    </section>
  );
}

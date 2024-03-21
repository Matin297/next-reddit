import { notFound } from "next/navigation";
import { fetchPostById } from "@/app/lib/data";

interface DetailsProps {
  postID: string;
}

export default async function Details({ postID }: DetailsProps) {
  const post = await fetchPostById(postID);

  if (!post) {
    return notFound();
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">
        {post.title}
        <div className="text-sm font-normal space-x-1">
          <span>By</span>
          <span>{post.user.name}</span>
        </div>
      </h2>
      <p>{post.content}</p>
    </section>
  );
}

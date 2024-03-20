import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import {
  ChatBubbleBottomCenterTextIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { pathnames } from "@/app/lib/paths";
import { EnhancedPostItem } from "@/app/lib/data";

interface PostListProps {
  fetchPosts: () => Promise<EnhancedPostItem[]>;
}

export default async function PostList({ fetchPosts }: PostListProps) {
  const posts = await fetchPosts();

  return (
    <ul className="flex-1 divide-y">
      {posts.map((post) => (
        <li key={post.id} className="py-3 space-y-4">
          <Link
            as={NextLink}
            underline="hover"
            color="foreground"
            className="space-x-2"
            href={pathnames.post(post.topic.slug, post.id)}
          >
            <LinkIcon width={15} className="text-slate-500" />
            <h3 className="text-md font-semibold">{post.title}</h3>
          </Link>
          <p>{post.content.substring(0, 150)}...</p>
          <section className="flex justify-end gap-4">
            <span className="space-x-2">
              <span className="text-slate-500 text-sm">By</span>
              <span>{post.user.name}</span>
            </span>
            <span className="flex gap-2">
              <ChatBubbleBottomCenterTextIcon
                className="text-slate-500"
                width={20}
              />
              <span>{post._count.comments}</span>
            </span>
          </section>
        </li>
      ))}
    </ul>
  );
}

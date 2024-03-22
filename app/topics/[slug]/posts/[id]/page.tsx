import { Divider } from "@nextui-org/react";
import Details from "@/app/components/post/details";
import CommentForm from "@/app/components/post/comment-form";
import CommentList from "@/app/components/post/comment-list";

interface PostDetailsProps {
  params: {
    slug: string;
    id: string;
  };
}

export default function PostDetails({ params: { id } }: PostDetailsProps) {
  return (
    <section className="space-y-4">
      <Details postID={id} />
      <CommentForm mode="comment" postID={id} />
      <CommentList postID={id} />
    </section>
  );
}

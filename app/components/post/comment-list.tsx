import { fetchComments } from "@/app/lib/data";
import CommentItem from "./comment-item";

interface CommentListProps {
  postID: string;
}

export default async function CommentList({ postID }: CommentListProps) {
  const comments = await fetchComments(postID);

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Comments({comments.length})</h2>
      <ul className="space-y-4">
        {comments
          .filter(({ parentId }) => !parentId)
          .map((comment) => (
            <CommentItem key={comment.id} {...comment} />
          ))}
      </ul>
    </section>
  );
}

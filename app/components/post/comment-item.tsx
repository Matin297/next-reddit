import { EnhancedCommentItem, fetchComments } from "@/app/lib/data";
import CommentForm from "./comment-form";

export default async function CommentItem({
  id,
  user,
  postId: postID,
  content,
}: EnhancedCommentItem) {
  const comments = await fetchComments(postID);
  let replies = null;

  if (comments) {
    replies = comments.filter((comment) => comment.parentId === id);
  }

  return (
    <li className="border rounded-lg inline-block p-4 flex flex-col gap-4">
      <h3 className="font-semibold">{user.name}</h3>
      <p>{content}</p>
      <CommentForm mode="reply" postID={postID} parentId={id} />
      {replies && replies.length > 0 && (
        <ul className="space-y-4">
          {replies.map((reply) => (
            <CommentItem key={reply.id} {...reply} />
          ))}
        </ul>
      )}
    </li>
  );
}

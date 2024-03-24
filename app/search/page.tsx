import { Suspense } from "react";
import { redirect } from "next/navigation";
import { searchPosts } from "@/app/lib/data";
import { pathnames } from "@/app/lib/paths";
import PostList from "@/app/components/topic/post-list";

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams: { q } }: SearchPageProps) {
  if (!q) {
    redirect(pathnames.home());
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg">
        Search result for{" "}
        <span className="text-primary-500 text-xl capitalize font-semibold">
          {q}
        </span>
        :
      </h2>
      <Suspense fallback={<p>Loading...</p>}>
        <PostList fetchPosts={searchPosts.bind(null, q)} />
      </Suspense>
    </section>
  );
}

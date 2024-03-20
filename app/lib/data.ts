import { db } from "@/app/lib/prisma";

export async function fetchTopics() {
  try {
    const topics = db.topic.findMany();
    return topics;
  } catch (error) {
    throw new Error("Failed to fetch topics!");
  }
}

export async function fetchTopicBySlug(slug: string) {
  try {
    const topic = await db.topic.findFirst({
      where: {
        slug,
      },
      select: {
        description: true,
      },
    });
    return topic;
  } catch (error) {
    throw new Error("Failed to fetch topic!");
  }
}

export type EnhancedPostItem = Awaited<
  ReturnType<typeof fetchPostsBySlug>
>[number];

export async function fetchPostsBySlug(slug?: string) {
  try {
    const posts = await db.post.findMany({
      where: { topic: { slug } },
      include: {
        topic: { select: { slug: true } },
        user: { select: { name: true } },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts!");
  }
}

import { db } from "@/app/lib/prisma";

export async function fetchTopics() {
  try {
    const topics = db.topic.findMany();
    return topics;
  } catch (error) {
    throw new Error("Failed to fetch topics!");
  }
}

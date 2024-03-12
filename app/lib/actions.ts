"use server";

import * as auth from "@/auth";

export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}

export async function createTopic() {
  // revalidate home page
}
export async function createPost() {
  // revalidate that specific topic page
}
export async function createComment() {
  // revalidate that specific post page
}

"use server";

import { redirect } from "next/navigation";
import { pathnames } from "@/app/lib/paths";

export async function search(formData: FormData) {
  const query = formData.get("q");

  if (!query) {
    redirect(pathnames.home());
  } else {
    redirect(pathnames.search(query.toString()));
  }
}

"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.status === "loading") return <p>Client: ...</p>;

  if (session.status === "authenticated") {
    return <p>Client: Authenticated as {JSON.stringify(session.data.user)}</p>;
  }

  return <p>Client: Unauthenticated!</p>;
}

import { auth } from "@/auth";

export default async function Profile() {
  const data = await auth();

  if (data) {
    return <p>Server: Authenticated as {JSON.stringify(data.user)}</p>;
  }

  return <p>Server: Unauthenticated!</p>;
}

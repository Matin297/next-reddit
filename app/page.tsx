import { Button } from "@nextui-org/react";
import { signIn, signOut } from "@/app/lib/actions";

import ProfileClient from "@/app/components/profile-client";
import ProfileServer from "@/app/components/profile-server";

export default function Home() {
  return (
    <div>
      <form action={signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <br />

      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      <br />

      <ProfileClient />
      <ProfileServer />
    </div>
  );
}

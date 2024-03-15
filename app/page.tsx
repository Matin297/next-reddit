import { Button } from "@nextui-org/react";
import { signIn, signOut } from "@/app/lib/actions";

import ProfileClient from "@/app/components/profile-client";
import ProfileServer from "@/app/components/profile-server";

export default function Home() {
  return (
    <div>
      <ProfileClient />
      <ProfileServer />
    </div>
  );
}

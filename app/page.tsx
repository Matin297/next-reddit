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

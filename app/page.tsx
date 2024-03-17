import Link from "next/link";
import { Button } from "@nextui-org/react";
import { pathnames } from "@/app/lib/paths";

export default function Home() {
  return (
    <div>
      <Button as={Link} color="primary" href={pathnames.topicCreation()}>
        Create Topic
      </Button>
    </div>
  );
}

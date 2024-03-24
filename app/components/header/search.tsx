"use client";

import { useSearchParams } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { search } from "@/app/lib/actions";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <form className="flex gap-1" action={search}>
      <Button isIconOnly variant="bordered" type="submit">
        <MagnifyingGlassIcon width={15} />
      </Button>
      <Input
        defaultValue={searchParams.get("q") || ""}
        variant="bordered"
        name="q"
        placeholder="search..."
      />
    </form>
  );
}

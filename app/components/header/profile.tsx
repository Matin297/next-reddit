"use client";

import { useSession } from "next-auth/react";
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { signIn, signOut } from "@/app/lib/actions";

export default function Profile() {
  const { data, status } = useSession();

  if (status === "loading") return null;

  if (status === "authenticated" && data.user) {
    return (
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Avatar
            as="button"
            isBordered
            name={data.user.name || ""}
            src={data.user.image || ""}
          />
        </PopoverTrigger>
        <PopoverContent aria-label="Profile Actions" className="p-3 gap-2">
          <div className="gap-2">
            <p className="font-semibold">Signed in as</p>
            <p>{data.user.email || "User"}</p>
          </div>
          <form className="w-full" action={signOut}>
            <Button
              className="w-full"
              variant="light"
              color="danger"
              type="submit"
            >
              Sign Out
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        <NavbarItem as="form" action={signIn}>
          <Button type="submit" color="primary" variant="solid">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem as="form" action={signIn}>
          <Button type="submit" color="primary" variant="bordered">
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  }

  return null;
}

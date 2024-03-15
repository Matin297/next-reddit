import Link from "next/link";
import {
  Input,
  Avatar,
  Button,
  Navbar,
  NavbarItem,
  NavbarBrand,
  NavbarContent,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { pathnames } from "@/app/lib/paths";
import { auth } from "@/auth";
import { signIn, signOut } from "@/app/lib/actions";

export default async function Header() {
  const data = await auth();

  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link href={pathnames.home()}>
          <h1 className="font-semibold text-2xl">Discuss</h1>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input color="primary" variant="bordered" placeholder="search..." />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {data?.user ? (
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
        ) : (
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
        )}
      </NavbarContent>
    </Navbar>
  );
}

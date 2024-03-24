import { Suspense } from "react";
import Link from "next/link";
import {
  Input,
  Navbar,
  NavbarItem,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { pathnames } from "@/app/lib/paths";
import Profile from "./profile";
import Search from "./search";

export default async function Header() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link href={pathnames.home()}>
          <h1 className="font-semibold text-2xl">Discuss</h1>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <Search />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Profile />
      </NavbarContent>
    </Navbar>
  );
}

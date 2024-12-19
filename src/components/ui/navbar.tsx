import React from "react";
import Logo from "./logo";
import { Button } from "./button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky flex w-full flex-row items-center justify-center">
      <nav
        role="navigation"
        className="container flex w-full items-center justify-between"
      >
        <div className="flex flex-row items-center gap-2">
          <Logo />

          <p className="text-2xl md:text-3xl">Fintrack</p>
        </div>

        <div className="flex flex-row gap-2">
          <Button variant={"secondary"}>
            <Link href={"/signup"}>Sign up</Link>
          </Button>
          <Button>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

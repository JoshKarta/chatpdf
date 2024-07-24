import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="border-b backdrop-blur-md shadow-sm fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <Link href={"/"} className="-rotate-3 font-bold">
          Chat <span className="text-green-500">PDF</span>
        </Link>
        <div>
          <SignedOut>
            <Button asChild>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

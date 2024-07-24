import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="border-b backdrop-blur-md shadow-sm">
      <div className="container p-4 flex items-center justify-between">
        <Link href={"/"} className="-rotate-3">
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

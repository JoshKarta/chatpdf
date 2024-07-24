"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { FilePlus2 } from "lucide-react";


export default function Header() {
  const pathname = usePathname()
  console.log(pathname)
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
            <div className="flex items-center gap-2">
              {pathname.includes("/dashboard") && <div className="flex items-center space-x-2">
                <Button asChild variant={"link"} className="hidden md:flex">
                  <Link href={"/dashboard/pricing"}>Pricing</Link>
                </Button>

                <Button asChild variant={"outline"}>
                  <Link href={"/dashboard"}>My Documents</Link>
                </Button>
                <Button asChild variant={"outline"} className="border-green-500">
                  <Link href={"/dashboard/upload"}>
                    <FilePlus2 className="text-green-500 h-5 w-5" />
                  </Link>
                </Button>
              </div>}
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

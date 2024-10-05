import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="flex justify-end p-4 absolute top-0 left-0 right-0 z-50">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className="flex gap-2">
          <Link href="/my-plans">
            <Button variant={"outline"}>My Plans</Button>
          </Link>
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}

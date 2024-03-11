"use client";
// Next
import Link from "next/link";

// Icons
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// Shadcn
import { Button } from "@/components/ui/button";

export default function PageTwo() {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen h-vh">
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
          <h2 className="text-2xl text-card-foreground/60">Pretty cool huh?</h2>
          <Button
            id="onborda-step7"
            size="lg"
            variant="secondary"
            className="flex items-center gap-2 text-md"
            asChild
          >
            <a href="https://github.com/uixmat/onborda" target="_blank">
              <GitHubLogoIcon /> Onborda
            </a>
          </Button>
          <Link
            href="/"
            className="transition-all text-foreground/80 hover:text-foreground"
          >
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}

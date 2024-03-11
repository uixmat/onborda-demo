"use client";
// Next
import Link from "next/link";

// Onborda
import { useOnborda } from "onborda";

// Shadcn
import { Button } from "@/components/ui/button";

// Icons
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Sparkles, BookOpen } from "lucide-react";

// Components
import Provider from "@/components/Code/Provider";
import Pointer from "@/components/Code/Pointer";
import Steps from "@/components/Code/Steps";
import Features from "@/components/Features";
import ModeToggle from "@/components/ModeToggle";

export default function HomePage() {
  const { startOnborda } = useOnborda();
  const handleStartOnborda = () => {
    startOnborda();
  };

  return (
    <>
      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-[600px] bg-gradient-to-br from-fuchsia-500 to-violet-700 rounded-3xl space-y-8 p-5 overflow-clip">
        <h1 className="text-[48px] font-bold text-secondary/90">Onborda</h1>
        <div>
          <p className="text-lg text-secondary/90">
            Give your application the onboarding it deserves with{" "}
            <b>Onborda product tour</b> for Next.js 🪄✨
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-4">
            <Button size="lg" onClick={handleStartOnborda}>
              <Sparkles size={16} className="mr-2" /> Start the tour
            </Button>
            <Button size="lg" variant="secondary" disabled>
              {/* <Link href="/docs"> */}
              <BookOpen size={16} className="mr-2" /> Documentation
              {/* </Link> */}
            </Button>
          </div>
          <code className="px-4 py-2 text-xs rounded-md bg-foreground/20 text-secondary">
            ~ pnpm install onborda
          </code>
        </div>

        <a
          href="https://github.com/uixmat/onborda"
          target="_blank"
          className="absolute block pt-10 pb-2 transition-all rotate-45 bg-black/60 px-14 -top-12 text-white/80 -right-12 hover:bg-black hover:text-white"
        >
          <GitHubLogoIcon className="w-6 h-6 -rotate-45" />
        </a>

        <ModeToggle />
      </div>

      <Features />

      <Steps />
      <Pointer />
      <Provider />
    </>
  );
}

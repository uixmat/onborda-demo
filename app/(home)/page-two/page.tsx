"use client";

// Onborda
import { useOnborda } from "onborda";

// Shadcn
import { Button } from "@/components/ui/button";

export default function PageTwo() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div id="onborda-step7">
          <Button>Hello World</Button>
          <p>Pretty cool huh?</p>
        </div>
      </div>
    </>
  );
}

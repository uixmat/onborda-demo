// Next
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// Highlight.js
import hljs from "highlight.js";
import { steps } from "@/lib/snippets";

// Icons
import { LayersIcon } from "@radix-ui/react-icons";

export default function Steps() {
  const stepsCode = hljs.highlight("javascript", steps).value;

  return (
    <div className="block w-full">
      <div
        id="onborda-step4"
        className="grid items-start grid-cols-1 gap-0 border lg:grid-cols-12 rounded-3xl overflow-clip"
      >
        <div className="h-full col-span-5 p-8 space-y-4 text-left border-r bg-card">
          <div className="flex items-center gap-2 text-purple-500">
            <LayersIcon className="w-8 h-8" />
            <h2 className="text-2xl font-semibold text-primary">Steps</h2>
          </div>
          <p>
            Steps are the core of Onborda, they are the features you wish to
            introduce your users to when showcasing your application for the
            first time. To give you more control over the look and feel, Onborda
            provides you with an array of options to customize each step.
          </p>
          <Button disabled variant="secondary">
            Read the docs
          </Button>
        </div>

        <div className="h-full col-span-7 p-8 text-left bg-gradient-to-br to-purple-700 from-indigo-600">
          <code className="flex w-full p-8 overflow-x-scroll text-sm rounded-xl bg-card">
            <pre
              className="hljs"
              dangerouslySetInnerHTML={{ __html: stepsCode }}
            />
          </code>
        </div>
      </div>
    </div>
  );
}

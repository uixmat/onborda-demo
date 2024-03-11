// Next
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// Highlight.js
import hljs from "highlight.js";
import { provider } from "@/lib/snippets";

// Icons
import { CodeSquare } from "lucide-react";

export default function Provider() {
  const providerCode = hljs.highlight("javascript", provider).value;

  return (
    <div className="block w-full">
      <div
        id="onborda-step6"
        className="grid items-start grid-cols-1 gap-0 border lg:grid-cols-12 rounded-3xl overflow-clip"
      >
        <div className="h-full col-span-5 p-8 space-y-4 text-left border-r bg-card">
          <div className="flex items-center gap-2 text-purple-500">
            <CodeSquare className="w-8 h-8" />
            <h2 className="text-xl font-semibold text-primary">Provider</h2>
          </div>
          <p>
            The Onborda provider is a wrapper component that provides the
            context for the Onborda component to work. It takes in the steps
            array and other options to customize the look and feel of the tour.
            You can set the visibility and define a custom card.
          </p>
          <Button disabled variant="secondary">
            Read the docs
          </Button>
        </div>

        <div className="h-full col-span-7 p-8 text-left bg-gradient-to-br to-purple-700 from-indigo-600">
          <code className="flex w-full p-8 overflow-x-scroll text-sm rounded-xl bg-card">
            <pre
              className="hljs"
              dangerouslySetInnerHTML={{ __html: providerCode }}
            />
          </code>
        </div>
      </div>
    </div>
  );
}

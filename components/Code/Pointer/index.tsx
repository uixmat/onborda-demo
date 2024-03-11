// Next
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// Highlight.js
import hljs from "highlight.js";
import { customCards } from "@/lib/snippets";

// Icons
import { MessageSquare } from "lucide-react";

export default function Pointer() {
  const cardsCode = hljs.highlight("javascript", customCards).value;

  return (
    <div className="block w-full">
      <div
        id="onborda-step5"
        className="grid items-start grid-cols-1 gap-0 border lg:grid-cols-12 rounded-3xl overflow-clip"
      >
        <div className="order-2 h-full col-span-7 p-8 text-left bg-gradient-to-br to-purple-700 from-indigo-600 lg:order-1">
          <code className="flex w-full p-8 overflow-x-scroll text-sm rounded-xl bg-card">
            <pre
              className="hljs"
              dangerouslySetInnerHTML={{ __html: cardsCode }}
            />
          </code>
        </div>

        <div className="order-1 h-full col-span-5 p-8 space-y-4 text-left border-l lg:order-2 bg-card">
          <div className="flex items-center gap-2 text-purple-500">
            <MessageSquare className="w-8 h-8" />
            <h2 className="text-xl font-semibold text-primary">
              Custom pointer
            </h2>
          </div>
          <p>
            Pointers are the visual indicators (or tooltips) that guide users
            through the application. Onborda let's you specify a custom
            component to give you full control over the look and feel of the
            pointer.
          </p>
          <Button disabled variant="secondary">
            Read the docs
          </Button>
        </div>
      </div>
    </div>
  );
}

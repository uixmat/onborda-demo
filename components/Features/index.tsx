// Icons
import {
  FramerLogoIcon,
  VercelLogoIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import { Card, CardHeader, CardContent } from "../ui/card";

export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <Card id="onborda-step1">
        <CardHeader>
          <div className="flex items-center gap-2 font-medium">
            <VercelLogoIcon className="w-10 h-10" />
            Next.js 13^
          </div>
        </CardHeader>
        <CardContent className="text-left">
          <p>
            Onborda is built for Next.js applications and is designed to work
            with all projects using v13^ seemlessly and easily navigate between
            steps in your tour across routes.
          </p>
        </CardContent>
      </Card>
      <Card id="onborda-step2">
        <CardHeader>
          <div className="flex items-center gap-2 font-medium">
            <CodeIcon className="w-10 h-10" />
            Customisable
          </div>
        </CardHeader>
        <CardContent className="text-left">
          <p>
            Onborda pointers are fully customizable, you can use the default
            styles out of the box or customize it to fit your application, works
            perfectly with Shadcn UI and Tailwind CSS.
          </p>
        </CardContent>
      </Card>
      <Card id="onborda-step3">
        <CardHeader>
          <div className="flex items-center gap-2 font-medium">
            <FramerLogoIcon className="w-10 h-10" />
            Framer Motion
          </div>
        </CardHeader>
        <CardContent className="text-left">
          <p>
            By taking advantage of <b>framer motion</b> animations, Onborda
            provides users with an immersive experience as they tour your
            application.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

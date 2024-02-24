import TypewriterEffect from "@/components/typewriter-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7x6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                portfolio
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Hi, i am Maroš.
            </h1>
            <div className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              <TypewriterEffect />
            </div>
          </div>

          <div className="flex justify-center max-w-xs mx-auto mt-10">
            <Button size="lg" asChild>
              <Link href="/portfolio">Enter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

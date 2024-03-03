import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7x6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full border">
              <span className="text-lg font-medium text-primary">
                My name is Maroš,
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              and i am an aspiring React & Next.js{" "}
              <span className="text-primary"> developer</span>.
            </h1>
          </div>

          <div className="flex justify-center max-w-xs mx-auto mt-10">
            <Button
              className="border border-primary"
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/portfolio">Enter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

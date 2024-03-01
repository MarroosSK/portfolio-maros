import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import globeImg from "../../public/globe.png";

const PortfolioPage = () => {
  return (
    <div className="grid items-start gap-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl ">About</h1>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Maroš Chmeľ</CardTitle>
          <CardDescription className="leading-6">
            React & Next.js aspiring developer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="space-y-1 leading-6">
              Hi! My name is Maroš Chmeľ. I am from{" "}
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://www.google.com/search?&q=vranov+nad+topľou"
                  target="_blank"
                >
                  <Image
                    src={globeImg}
                    height={14}
                    width={15}
                    alt="planet-logo"
                    className="mr-2 w-auto h-auto"
                  />
                  Vranov nad Topľou, Slovakia
                </Link>
              </Button>
              . I have been studying for about a year, improving my skills by
              creating projects, yet i am missing experience from real-world
              projects and that is why i consider myself aspiring developer. My
              goal is to change this state into developer (not by using useState
              &#128522;).
            </div>
            <div className="space-y-1">
              <p className="mt-6 leading-6">
                When I am not studying, I like to read books and exercise.
                Lately running has become my favorite, it helps me to clear my
                mind, so new ideas can pop up quicker. Besides that it helps me
                to stay fit.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button asChild>
            <Link href="/files/cv_feb24_Maros_Chmel.pdf" target="_blank">
              Check CV
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PortfolioPage;

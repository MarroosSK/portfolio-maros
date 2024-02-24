"use client";

import { SkeletonImage } from "@/components/skeleton-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsData } from "@/utils/projects-data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectIdPage = ({ params }: { params: { id: string } }) => {
  const [status, setStatus] = useState(false);

  const projects = projectsData.find(
    (project) => project.id === parseInt(params.id)
  );

  useEffect(() => {
    if (projects) {
      setStatus(true);
    }
  }, []);
  return (
    <div className="grid items-start gap-8">
      <Link href={"/portfolio/projects"}>
        <ChevronLeft className="border rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600" />
      </Link>

      <Card>
        <div className="space-y-1">
          {status ? (
            <Image
              src={projects?.img as string}
              alt={projects?.title as string}
              height={1200}
              width={1200}
              className="w-full h-full rounded-t-lg aspect-video object-cover"
            />
          ) : (
            <SkeletonImage />
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-primary text-md md:text-xl">
            {projects?.title}
          </CardTitle>
          <CardDescription className="text-xs md:text-md ">
            {projects?.category}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="space-y-1">
              <p className="text-sm md:text-md  leading-6">{projects?.info}</p>
            </div>
            {projects?.credentials_email?.length !== 0 &&
              projects?.credentials_password?.length !== 0 && (
                <div className="mt-4 flex flex-col">
                  <p className="text-xs ">
                    <span className="font-semibold">Email: </span>
                    {projects?.credentials_email}
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold">Password: </span>
                    {projects?.credentials_password}
                  </p>
                </div>
              )}
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-xs md:text-base text-muted-foreground">
              Technologies
            </p>
            <div className=" mt-2  flex items-center flex-wrap gap-2">
              {projects?.stack.map((tech: string, index: number) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="space-x-3">
          <Button asChild>
            <Link href={projects?.url as string} target="_blank">
              App preview
            </Link>
          </Button>
          <Button asChild>
            <Link href={projects?.source as string} target="_blank">
              GitHub repo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectIdPage;

"use client";

import { SkeletonCard } from "@/components/skeleton-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectsData } from "@/utils/projects-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(true);
  }, []);
  return (
    <div className="grid items-start gap-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl ">Projects</h1>
          <p className="text-lg text-muted-foreground">My latest work</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-7">
        {!status && Array(6).fill(<SkeletonCard />)}
        {status && (
          <>
            {projectsData.map((project) => (
              <Card key={project.id}>
                <CardContent className="px-0 pb-2 w-full flex flex-col ">
                  <div className="w-full relative">
                    {project.img ? (
                      <Image
                        src={project.img}
                        height={300}
                        width={500}
                        className="w-full rounded-t-lg aspect-video object-cover"
                        alt={project.title}
                      />
                    ) : (
                      <p>loading</p>
                    )}
                    <Badge className="absolute top-2 right-2">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-3 flex flex-col gap-y-2">
                    <h3 className="line-clamp-2 mt-3 pl-3 text-base font-semibold">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 pl-3 text-sm text-muted-foreground">
                      {project.info}
                    </p>
                    <div className=" mt-2  hidden md:flex items-center flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button className="m-2" asChild>
                      <Link href={`/portfolio/projects/${project.id}`}>
                        Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;

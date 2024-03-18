"use client";

import { SkeletonCard } from "@/components/skeleton-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { projectsData, projectsI } from "@/utils/projects-data";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchWord, setSearchWord] = useState<string>("");
  const [filteredProjects, setFilteredProjects] =
    useState<projectsI[]>(projectsData);

  const handleSearch = async (word: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = projectsData.filter((project) =>
      project.title.toLowerCase().includes(word.toLowerCase())
    );
    setFilteredProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="grid items-start gap-8">
      <div className="flex flex-col sm:flex-row items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl ">Projects</h1>
          <p className="text-lg text-muted-foreground">My latest work</p>
        </div>
        <div className="mt-3 sm:mt-0 flex w-full max-w-sm items-center ">
          <Input
            type="text"
            placeholder="Search for Project"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <Button type="button" onClick={() => handleSearch(searchWord)}>
            <Search />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-7">
        {!loading && filteredProjects.length === 0 && (
          <p>No projects with such name found</p>
        )}
        {loading
          ? Array(6).fill(<SkeletonCard />)
          : filteredProjects.map((project) => (
              <Card key={project.id}>
                <CardContent className="px-0 pb-2 w-full flex flex-col ">
                  <div className="w-full  relative">
                    {project.img ? (
                      <Image
                        src={project.img}
                        height={300}
                        width={500}
                        className="w-full rounded-t-lg aspect-video object-cover object-center duration-700 ease-in-out bg-muted  scale-100 blur-0 grayscale-0 "
                        alt={project.title}
                        loading="lazy"
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
                      <Link href={`/projects/${project.id}`}>Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

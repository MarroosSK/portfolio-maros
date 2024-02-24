import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/utils/skills-data";

const SkillsPage = () => {
  return (
    <div className="grid items-start gap-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl ">Skills</h1>
          <p className="text-lg text-muted-foreground">Technologies i use</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 items-center gap-1">
        {skillsData.map((skill) => (
          <Card
            key={skill.id}
            className="flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            <CardContent className="p-6 flex flex-col items-center justify-center gap-x-2">
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;

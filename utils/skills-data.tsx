//icons - skillSet
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiTypescript,
  SiRedux,
  SiMui,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiSanity,
  SiGraphql,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { ReactElement } from "react";

interface skillsDataI {
  id: number;
  name: string;
  icon: ReactElement;
}

export const skillsData: skillsDataI[] = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 size={35} />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <SiCss3 size={35} />,
  },
  {
    id: 3,
    name: "JS",
    icon: <DiJavascript1 size={35} />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact size={35} />,
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs size={35} />,
  },
  {
    id: 6,
    name: "TS",
    icon: <SiTypescript size={35} />,
  },
  {
    id: 7,
    name: "R. Toolkit",
    icon: <SiRedux size={35} />,
  },
  {
    id: 8,
    name: "SASS",
    icon: <FaSass size={35} />,
  },

  {
    id: 9,
    name: "Bootstrap",
    icon: <BsBootstrapFill size={35} />,
  },
  {
    id: 10,
    name: "MUI",
    icon: <SiMui size={35} />,
  },
  {
    id: 11,
    name: "Tailwind",
    icon: <SiTailwindcss size={35} />,
  },
  {
    id: 12,
    name: "Mysql",
    icon: <SiMysql size={35} />,
  },
  {
    id: 13,
    name: "Postgres",
    icon: <SiPostgresql size={35} />,
  },
  {
    id: 14,
    name: "Express",
    icon: <SiExpress size={35} />,
  },
  {
    id: 15,
    name: "Prisma",
    icon: <SiPrisma size={35} />,
  },
  {
    id: 16,
    name: "Sanity.io",
    icon: <SiSanity size={35} />,
  },
  {
    id: 17,
    name: "GraphQl",
    icon: <SiGraphql size={35} />,
  },
];

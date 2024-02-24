import {
  BookOpenText,
  FolderSearch,
  LucideIcon,
  Mail,
  User,
} from "lucide-react";

interface navLinksI {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navData: navLinksI[] = [
  { name: "About", href: "/portfolio", icon: User },
  { name: "Skills", href: "/portfolio/skills", icon: BookOpenText },
  { name: "Projects", href: "/portfolio/projects", icon: FolderSearch },
  { name: "Contact", href: "/portfolio/contact", icon: Mail },
];

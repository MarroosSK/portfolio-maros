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
  { name: "About", href: "/", icon: User },
  { name: "Skills", href: "/skills", icon: BookOpenText },
  { name: "Projects", href: "/projects", icon: FolderSearch },
  { name: "Contact", href: "/contact", icon: Mail },
];

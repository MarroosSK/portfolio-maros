"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  BookOpenText,
  FolderSearch,
  LucideIcon,
  Mail,
  Menu,
  User,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface navLinksI {
  icon: LucideIcon;
  title: string;
  href: string;
}
const navbarLinks: navLinksI[] = [
  {
    icon: User,
    title: "About",
    href: "/",
  },
  {
    icon: BookOpenText,
    title: "Skills",
    href: "/skills",
  },
  {
    icon: FolderSearch,
    title: "Projects",
    href: "/projects",
  },
  {
    icon: Mail,
    title: "Contact",
    href: "/contact",
  },
];

const MobileMenu = () => {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <Link
              href={"/"}
              className="flex flex-1 items-center gap-x-2  text-3xl"
            >
              Maroš Chmeľ
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-7 grid items-start gap-2 sticky top-[50px] overflow-hidden">
          {navbarLinks.map((navLink, index: number) => (
            <motion.div
              key={navLink.title}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4 + index / 10,
              }}
              onClick={() => setSheetOpen(false)}
            >
              <Link href={navLink.href}>
                <span
                  className={cn(
                    "group flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === navLink.href ? "bg-accent" : "bg-transparent"
                  )}
                >
                  <navLink.icon className="mr-2 h-4 w-4 text-primary" />
                  <span>{navLink.title}</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

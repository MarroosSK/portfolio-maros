"use client";

import { cn } from "@/lib/utils";
import { navData } from "@/utils/nav-data";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PortfolioSidebar = () => {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="grid items-start gap-2 sticky top-[50px] overflow-hidden">
      {isLoaded ? (
        <>
          {navData.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + idx / 6,
              }}
            >
              <Link href={link.href}>
                <span
                  className={cn(
                    "group flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === link.href ? "bg-accent" : "bg-transparent"
                  )}
                >
                  <link.icon className="mr-2 h-4 w-4 text-primary" />
                  <span>{link.name}</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </>
      ) : (
        <div className="flex  mx-auto flex-col  items-center max-w-[500px] h-[500px] p-4 py-8    gap-4  rounded-md">
          <Loader2 className="animate-spin" />{" "}
        </div>
      )}
    </div>
  );
};

export default PortfolioSidebar;

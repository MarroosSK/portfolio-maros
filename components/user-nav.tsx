import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { navData } from "@/utils/nav-data";

const UserNav = ({
  email,

  name,
}: {
  email: string;

  name: string;
}) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            id="buttonProfile"
            title="Profile"
            variant="ghost"
            className="relative h-10 w-10 rounded-full"
          >
            <Avatar className="h-10 w-10 rounded-full">
              <AvatarImage
                src={
                  "https://avatars.githubusercontent.com/u/103311716?s=400&u=2ff3394310209818eacb1ec3f81a73dc2311039a&v=4"
                }
                alt={name}
              />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {navData.map((link) => (
              <DropdownMenuItem asChild key={link.name}>
                <Link
                  href={link.href}
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  {link.name}
                  <span>
                    <link.icon className="mr-2 h-4 w-4 text-primary" />
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserNav;

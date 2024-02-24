import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import UserNav from "./user-nav";
import Image from "next/image";
import mIcon from "../public/Micon2.png";

const Navbar = () => {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center justify-center ">
            <Image src={mIcon} alt="logo-icon" height={35} width={35} />

            <p className="text-lg text-muted-foreground">arroos</p>
          </div>
        </Link>

        <div className="flex items-center gap-x-5">
          <ThemeSwitcher />

          <UserNav email={"maros1chmel@gmail.com"} name={"Maroš Chmeľ"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

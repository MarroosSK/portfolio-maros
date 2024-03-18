import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import UserNav from "./user-nav";
import Image from "next/image";
import mIcon from "../public/Micon2.png";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <nav className="border-b bg-background h-[10vh] landscape:h-[13vh] flex items-center">
      <div className="container flex items-center justify-between">
        {/* <Menu /> */}
        <div className="flex items-center gap-y-5">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <Link href="/" className="hidden md:flex">
            <div className="flex flex-row items-center justify-center ">
              <Image src={mIcon} alt="logo-icon" height={35} width={35} />

              <p className="text-lg text-muted-foreground">arroos</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-x-5">
          <ThemeSwitcher />

          <UserNav email={"maros1chmel@gmail.com"} name={"Maroš Chmeľ"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

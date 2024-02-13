"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

export default function AppBar() {
  const path = usePathname();

  return (
    <header className="navbar bg-base-200 fixed top-0 w-full z-50">
      <div className="navbar-start">
        <DropDownMenu />
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src={"/icon.svg"}
            alt="Website logo"
            className="h-auto"
            width={50}
            height={0}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-x-2">
          <li>
            <Link href="/" className={path === "/" ? "active" : ""}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className={path === "/about" ? "active" : ""}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={path === "/contact" ? "active" : ""}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </header>
  );
}

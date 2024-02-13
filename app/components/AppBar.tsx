import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

export default function AppBar() {
  return (
    <header className="navbar bg-base-200 fixed top-0 w-full z-50">
      <div className="navbar-start">
        <DropDownMenu />
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Image src={"/icon.svg"} alt="Website logo" width={50} height={50} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </header>
  );
}

"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const params = useParams();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(
      (typeof window !== "undefined" && window.location.hash) || "#about"
    );
  }, [params]);

  const NavLinks = [
    { id: 1, name: "About", path: "#about" },
    { id: 2, name: "Experience", path: "#experience" },
    { id: 3, name: "Projects", path: "#projects" },
  ];

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {NavLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className={`group flex items-center py-3 ${
                active === link.path ? "active" : ""
              }`}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-base-content transition-all group-hover:w-12 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none ${
                  active === link.path
                    ? "w-16 bg-primary"
                    : ""
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest active:text-primary group-hover:text-primary group-focus-visible:text-primary ${
                  active === link.path ? "text-primary" : ""
                }`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Heading from "./components/Heading";
import Summary from "./components/Summary";
import ContactButtons from "./components/ContactButtons";
import Timeline from "./components/Timeline";

import Projects from "./components/Projects";
import { Component } from "react";

export default function Home() {
  const sections = [
    { id: "about", name: "About", path: "#about", Component: Summary },
    {
      id: "experience",
      name: "Experience",
      path: "#experience",
      Component: Timeline,
    },
    {
      id: "projects",
      name: "Projects",
      path: "#projects",
      Component: Projects,
    },
  ];

  return (
    <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4">
        <header className="lg:flex lg:sticky lg:top-0  lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <Heading />
          <ContactButtons />
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24 ">
          {sections.map((section) => (
            <>
              <div className="text-white sticky top-0 py-5 md:hidden">
                {section.name}
              </div>
              <section
                id={section.id}
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-26 lg:scroll-mt-24"
              >
                <section.Component />
              </section>
            </>
          ))}
        </main>
      </div>
    </div>
  );
}

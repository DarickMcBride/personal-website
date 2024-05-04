import Heading from "./components/Heading";
import Summary from "./components/Summary";
import ContactButtons from "./components/ContactButtons";
import Timeline from "./components/Timeline";

import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4">
        <header className="lg:flex lg:sticky lg:top-0  lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <Heading />
          <ContactButtons />
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-26 lg:scroll-mt-24"
          >
            <Summary />
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-26 lg:scroll-mt-24"
          >
            <Timeline />
          </section>
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-26 lg:scroll-mt-24"
          >
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}

import Heading from "./components/Heading";
import Summary from "./components/Summary";
import ContactButtons from "./components/ContactButtons";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

import Projects from "./components/Projects";

export default function Home() {
  const sections = [
    { id: "about", name: "ABOUT", path: "#about", Component: Summary },
    {
      id: "experience",
      name: "EXPERIENCE",
      path: "#experience",
      Component: Timeline,
    },
    {
      id: "projects",
      name: "PROJECTS",
      path: "#projects",
      Component: Projects,
    },
  ];

  return (
    <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex  lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <Heading />
          <ContactButtons />
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="py-5 tracking-wider text-white md:hidden">
                {section.name}
              </h2>
              <section
                id={section.id}
                className="lg:mb-26 mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
              >
                <section.Component />
              </section>
            </div>
          ))}
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  );
}

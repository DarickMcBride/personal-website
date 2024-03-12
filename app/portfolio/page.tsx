import Projects from "../components/Projects";
import { notFound } from "next/navigation";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-primary text-4xl md:text-6xl font-extrabold p-4">
        PROJECTS
      </h2>
      <p className="text-lg  text-base-content ">
        Delve into the world of web development through my portfolio. Here,
        you&apos;ll find a diverse range of projects, each unique in its
        requirements and solutions. These projects not only demonstrate my
        technical skills, but also my ability to solve problems, think
        critically, and learn new technologies.
      </p>
      <p className="text-lg  text-base-content">
        Feel free to explore and engage with my work. Each project is a
        testament to my growth and dedication in the realm of web development. I
        hope that my work not only speaks to my capabilities as a web developer,
        but also sparks a conversation about potential collaborations on future
        projects. Each project links to the source code on GitHub. Enjoy your
        journey through my portfolio!
      </p>
      <Projects />
    </div>
  );
}

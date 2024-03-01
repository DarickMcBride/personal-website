import Projects from "../components/Projects";
import { notFound } from "next/navigation";

export default function PortfolioPage() {
  return notFound();
  // return (
  //   <div className="flex flex-col items-center">
  //     <h2 className="text-primary text-2xl font-bold p-4">MY PORTFOLIO</h2>
  //     <p className="text-lg  text-base-content p-4">
  //       Delve into the world of web development through my portfolio. Here,
  //       you&apos;ll find a diverse range of projects, each unique in its
  //       requirements and solutions. These projects not only demonstrate my
  //       technical skills in various languages and frameworks, but also my
  //       ability to solve problems, think critically, and learn new technologies.
  //     </p>
  //     <p className="text-lg  text-base-content p-4">
  //       Feel free to explore and engage with my work. Each project is a
  //       testament to my growth and dedication in the realm of web development. I
  //       hope that my work not only speaks to my capabilities as a web developer,
  //       but also sparks a conversation about potential collaborations on future
  //       projects. Enjoy your journey through my portfolio!
  //     </p>
  //     <Projects />
  //   </div>
  // );
}

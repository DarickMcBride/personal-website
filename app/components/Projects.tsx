import ProjectCard from "./ProjectCard";

import amysSite from "../../public/amys-site.png";
import imdbClone from "../../public/imdb.png";
import googleClone from "../../public/pixel.png";

const projects = [
  {
    id: 1,
    title: "Google Clone",
    description: "A fun application to that is a clone Google's search.",
    imageUrl: googleClone,
    projectUrl: "https://pixel-google-clone.vercel.app",
  },
  {
    id: 2,
    title: "IMDB Clone",
    description: "An example project that uses IMDB's API to display movies.",
    imageUrl: imdbClone,
    projectUrl: "https://imdb-next-pi.vercel.app",
  },
  {
    id: 3,
    title: "Professional Personal Site",
    description:
      "A professional site for an engineer.",
    imageUrl: amysSite,
    projectUrl: "https://www.amymcbride.com/",
  },
];

export default function Projects() {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-auto py-4">
      {projects.map((project) => (
        <div key={project.id} className="py-2">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

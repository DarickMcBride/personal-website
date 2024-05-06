import ProjectCard from "./ProjectCard";

import triviaPic from "../../public/trivia-site.png";
import imdbClone from "../../public/imdb.png";
import googleClone from "../../public/pixel.png";

const projects = [
  {
    id: 1,
    title: "Trivia Game",
    description: "A trivia game that uses the Open Trivia Database API.",
    imageUrl: triviaPic,
    projectUrl: "https://trivia-app-mauve-six.vercel.app",
  },
  {
    id: 2,
    title: "Google Clone",
    description: "A fun application to that is a clone of Google's search.",
    imageUrl: googleClone,
    projectUrl: "https://github.com/DarickMcBride/google-clone",
  },
  {
    id: 3,
    title: "IMDB Clone",
    description: "A project that uses IMDB's API to display movies.",
    imageUrl: imdbClone,
    projectUrl: "https://github.com/DarickMcBride/imdb-next",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div key={project.id} className="">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

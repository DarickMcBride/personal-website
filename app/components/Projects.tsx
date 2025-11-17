import ProjectCard from "./ProjectCard";
import triviaPic from "../../public/trivia-site.png";
import imdbClone from "../../public/imdb.png";
import googleClone from "../../public/pixel.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Trivia Game",
      description: "A trivia game that uses an open source trivia API.",
      imageUrl: triviaPic,
      projectUrl: "https://github.com/DarickMcBride/trivia-app",
      chips: ["React", "TypeScript", "dasiyUI", "Next.js", "Trivia API"],
    },
    {
      id: 2,
      title: "Google Clone",
      description: "A fun application that is a clone of Google's search.",
      imageUrl: googleClone,
      projectUrl: "https://github.com/DarickMcBride/google-clone",
      chips: ["React", "TypeScript", "TailwindCSS", "Next.js", "Google API"],
    },
    {
      id: 3,
      title: "IMDB Clone",
      description: "A project that uses IMDB's API to display movies.",
      imageUrl: imdbClone,
      projectUrl: "https://github.com/DarickMcBride/imdb-next",
      chips: ["React", "TypeScript", "TailwindCSS", "IMDB API"],
    },
  ];

  return (
    <div className="">
      {projects.map((project) => (
        <div key={project.id} className="flex justify-center py-2">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

import amysSite from "../../public/amys-site.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
    imageUrl: amysSite,
    projectUrl: "https://www.amymcbride.com/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is project 2",
    imageUrl: amysSite,
    projectUrl: "url-to-project-2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is project 3",
    imageUrl: amysSite,
    projectUrl: "url-to-project-2",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is project 4",
    imageUrl: amysSite,
    projectUrl: "url-to-project-2",
  },
  // add more projects here
];

export default function Projects() {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   mx-auto py-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

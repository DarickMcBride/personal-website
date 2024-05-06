import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  projectUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.projectUrl} target="_blank" rel="noreferrer noopener">
      <div className="card lg:card-side  bg-base-300 bg-opacity-40 hover:bg-gray-700 hover:bg-opacity-40 hover:shadow-sm hover:shadow-slate-600 max-w-lg">
        <figure>
          <Image src={project.imageUrl} alt={project.title} className="size-full lg:w-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
}

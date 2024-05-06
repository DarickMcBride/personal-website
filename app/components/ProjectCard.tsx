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
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 pb-5">
      <a
        key={project.id}
        href={project.projectUrl}
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-00 h-64"
          width={500}
          height={0}
        />
        <div className="">
          <h2 className="mt-2 text-lg font-semibold text-secondary text-center">
            {project.title}
          </h2>
          <p className="text-base-content text-center">{project.description}</p>
        </div>
      </a>
    </div>
  );
}

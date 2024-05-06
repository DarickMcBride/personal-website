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
    <div className="card card-side p-4 bg-none hover:bg-gray-700 hover:bg-opacity-40 hover:shadow-lg">
      <figure>
        <Image src={project.imageUrl} alt={project.title} className="w-36" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

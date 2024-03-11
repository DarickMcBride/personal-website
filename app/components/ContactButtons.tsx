import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="flex flex-row justify-center text-primary pt-4 pb-4 space-">
      <a
        className="btn btn-ghost btn-md flex flex-col items-center justify-center"
        href="mailto:contactme@darickmcbride.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={18} />
        <p className="text-xs">Email</p>
      </a>

      <a
        className="btn btn-ghost btn-md flex flex-col items-center justify-center "
        href="https://www.linkedin.com/in/darickmcbride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={18} />
        <p className="text-xs">LinkedIn</p>
      </a>
      <a
        className="btn btn-ghost btn-md flex flex-col items-center justify-center "
        href="https://github.com/DarickMcBride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={18} />
        <p className="text-xs">GitHub</p>
      </a>
      <Link
        className="btn btn-ghost btn-md flex flex-col items-center justify-center "
        href={
          "https://docs.google.com/document/d/1Y8AyyMWnrq9JYsG8c-L5VX3O5mKfpw19G8p5QI3vzcY/export?format=pdf"
        }
        locale={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFilePdf size={18} />
        <p className="text-xs">Resume</p>
      </Link>
    </div>
  );
}

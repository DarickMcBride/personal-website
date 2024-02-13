import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="flex justify-center text-primary pt-4 pb-4 ">
      <a
        className="btn btn-ghost flex flex-col items-center justify-center "
        href="mailto:contactme@darickmcbride.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={24} />
        Email
      </a>

      <a
        className="btn btn-ghost flex flex-col items-center justify-center "
        href="https://www.linkedin.com/in/darickmcbride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
        LinkedIn
      </a>
      <a
        className="btn btn-ghost flex flex-col items-center justify-center "
        href="https://github.com/DarickMcBride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
        GitHub
      </a>
      <Link
        className="btn btn-ghost flex flex-col items-center justify-center "
        href={"/resume.pdf"}
        locale={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFilePdf size={24} />
        Resume
      </Link>
    </div>
  );
}

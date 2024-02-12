import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="flex space-x-4 justify-center text-primary pt-4 pb-4">
      <a
        className="btn btn-circle btn-ghost"
        href="mailto:contactme@darickmcbride.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={32} />
      </a>
      <a
        className="btn btn-circle btn-ghost"
        href="https://www.linkedin.com/in/darickmcbride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        className="btn btn-circle btn-ghost"
        href="https://github.com/DarickMcBride"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} />
      </a>
    </div>
  );
}

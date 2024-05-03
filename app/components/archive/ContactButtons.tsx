import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="flex flex-row justify-center text-primary mt-4 mb-4">
      <div className="tooltip" data-tip="Email me">
        <a
          className="btn btn-ghost btn-xl flex flex-col items-center justify-center h-auto"
          href="mailto:contactme@darickmcbride.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="size-7 sm:size-12" />
          <p>Email</p>
        </a>
      </div>
      <div className="tooltip" data-tip="Visit my LinkedIn profile">
        <a
          className="btn btn-ghost btn-md flex flex-col items-center justify-center h-auto "
          href="https://www.linkedin.com/in/darickmcbride"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-7 sm:size-12" />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="tooltip" data-tip="Visit my GitHub profile">
        <a
          className="btn btn-ghost btn-md flex flex-col items-center justify-center h-auto"
          href="https://github.com/DarickMcBride"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-7 sm:size-12" />
          <p>GitHub</p>
        </a>
      </div>
      <div className="tooltip" data-tip="Download my resume">
        <Link
          className="btn btn-ghost btn-md flex flex-col h-auto"
          href={
            "https://docs.google.com/document/d/1Y8AyyMWnrq9JYsG8c-L5VX3O5mKfpw19G8p5QI3vzcY/export?format=pdf"
          }
          locale={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf className="size-7 sm:size-12" />

          <p>Resume</p>
        </Link>
      </div>
    </div>
  );
}

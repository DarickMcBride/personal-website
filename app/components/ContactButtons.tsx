import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="space-x-4 pt-7">
      <div className="tooltip" data-tip="Email me">
        <a
          href="mailto:contactme@darickmcbride.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope
            href="mailto:contactme@darickmcbride.com"
            target="_blank"
            className="size-7 hover:text-primary"
          />
        </a>
      </div>
      <div className="tooltip" data-tip="Visit my LinkedIn profile">
        <a
          href="https://www.linkedin.com/in/darickmcbride"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-7 hover:text-primary" />
        </a>
      </div>
      <div className="tooltip" data-tip="Visit my GitHub profile">
        <a
          href="https://github.com/DarickMcBride"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-7 hover:text-primary" />
        </a>
      </div>
      <div className="tooltip" data-tip="Download my resume">
        <Link
          href={
            "https://docs.google.com/document/d/1Y8AyyMWnrq9JYsG8c-L5VX3O5mKfpw19G8p5QI3vzcY/export?format=pdf"
          }
          locale={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf className="size-7 hover:text-primary" />
        </Link>
      </div>
    </div>
  );
}

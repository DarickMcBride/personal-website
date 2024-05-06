export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2018 - Present</time>
          <div className="text-lg font-black text-primary">
            Lead Software Engineer
          </div>
          <div className="text-md font-semibold text-white">Walters & Wolf</div>
          Build and maintain internal web applications for business operations.
          Lead the selection of technologies and architecture for new projects.
          Mentor junior developers and provide code reviews. Collaborate with
          stakeholder to meet their needs.
        </div>
        <hr />
      </li>

      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end md:text-start mb-10">
          <time className="font-mono italic">2018</time>
          <div className="text-lg font-black text-primary">
            Graduated College
          </div>
          <div className="text-md font-semibold text-white">UC Davis</div>
          Received a Bachelor of Science in Computer Science.
        </div>
        <hr />
      </li>
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2017</time>
          <div className="text-lg font-black text-primary">
            Intern Software Engineer
          </div>
          <div className="text-md font-semibold text-white">Walters & Wolf</div>
          Gained experience in building real world software to solve business
          needs.
        </div>
        <hr />
      </li>
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end md:text-start mb-10">
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black text-primary">Started College</div>
          <div className="text-md font-semibold text-white">UC Davis</div>
          Found my passion for software engineering and started my journey.
        </div>
        <hr />
      </li>
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2007 - 2013</time>
          <div className="text-lg font-black text-primary">
            The Forgotten Years
          </div>
          Took a quick detour into a career as an automotive mechanic until a
          mentor made me realize my potential.
        </div>
        <hr />
      </li>
    </ul>
  );
}

export default function Timeline() {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
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
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2025 - Present</time>
          <div className="text-lg font-black text-primary">
            Senior Solutions Engineer
          </div>
          <div className="text-md font-semibold text-white">State of California - Department of State Hospitals</div>
          <p>
            Helping improve civil services.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["JavaScript", "C#", ".NET"].map((chip, i) => (
              <div key={i} className="badge badge-secondary badge-outline">
                {chip}
              </div>
            ))}
          </div>
        </div>

        <hr />
      </li>
      <li></li>
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
        <div className="timeline-end mb-10 md:text-end">
          <time className="font-mono italic">2020 - 2024</time>
          <div className="text-lg font-black text-primary">
            Senior Software Engineer
          </div>
          <div className="text-md font-semibold text-white">Walters & Wolf</div>
          <p>
            Showing others how to fail successfully. Lesson learned: You must
            fail often to succeed.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "MUI",
              "Vite",
              "C#",
              "Python",
            ].map((chip, i) => (
              <div key={i} className="badge badge-secondary badge-outline">
                {chip}
              </div>
            ))}
          </div>
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
        <div className="timeline-start mb-10 md:text-start">
          <time className="font-mono italic">2018 - 2020</time>
          <div className="text-lg font-black text-primary">
            Official Bug Destroyer
          </div>
          <div className="text-md font-semibold text-white">Walters & Wolf</div>
          <p>
            Quickly realized how little I know and made every mistake one could
            make. Lesson learned: Stay humble and always be willing to learn.
          </p>
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
        <div className="timeline-end mb-10 md:text-end">
          <time className="font-mono italic">2017</time>
          <div className="text-lg font-black text-primary">
            Intern Software Engineer
          </div>
          <div className="text-md font-semibold text-white">Walters & Wolf</div>
          <p>
            Introduced to &apos;real-world&apos; projects. Fixed one bug, ten
            more appeared. Lesson learned: There is always room for improvement.
          </p>
          <div className="mt-2">
            <div className="badge badge-secondary badge-outline">VB</div>
          </div>
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
        <div className="timeline-start mb-10 md:text-start">
          <time className="font-mono italic">2015 - 2018</time>
          <div className="text-lg font-black text-primary">
            Began my Odyssey of Errors
          </div>
          <div className="text-md font-semibold text-white">UC Davis</div>
          <p>
            Tried to fix a bug for three days. Turned out to be a missing
            semicolon. Lesson learned: Details matter!
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "C++",
              "JavaScript",
              "Functional Programming",
              "DSA",
              "Networking",
            ].map((chip, i) => (
              <div key={i} className="badge badge-secondary badge-outline">
                {chip}
              </div>
            ))}
          </div>
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
        <div className="timeline-end mb-10 md:text-end">
          <time className="font-mono italic">2007 - 2013</time>
          <div className="text-lg font-black text-primary">
            The Forgotten Years
          </div>
          <p>
            Took a quick detour into a career as an automotive mechanic until a
            mentor made me realize my potential. Turns out fixing cars
            translates well to debugging code. Who knew? Lesson learned: Believe
            in yourself!
          </p>
        </div>
        <hr />
      </li>
    </ul>
  );
}

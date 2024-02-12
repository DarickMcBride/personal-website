import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center z-10">
      <h1 className="text-primary text-2xl p-4">Welcome!</h1>
      <div className="space-y-3">
        <p>
          I firmly believe in the power of technology to create engaging and
          dynamic online experiences. My website is built on a robust and modern
          technology stack that combines the best tools and frameworks to
          deliver a seamless and visually appealing user experience. Here&apos;s
          a closer look at the technologies I&apos;ve used to craft this site:
        </p>
        <dl className="space-y-2">
          <dt className="text-secondary text-lg">React</dt>
          <dd>
            At the heart of my website is React, a popular JavaScript library
            for building user interfaces. React allows me to create interactive
            and responsive web applications that provide a smooth and enjoyable
            browsing experience. It&apos;s the foundation of my website&apos;s
            frontend, enabling me to build complex UI components and manage
            state efficiently.
          </dd>
          <dt className="text-secondary text-lg">Next.js (App Router)</dt>
          <dd>
            I&apos;ve leveraged Next.js, a powerful framework built on top of
            React, to enhance the performance and SEO-friendliness of my
            website. Next.js enables server-side rendering, automatic code
            splitting, and simplified routing, all of which contribute to faster
            load times and a better overall user experience.
          </dd>
          <dt className="text-secondary text-lg">TailwindCSS and DaisyUI</dt>
          <dd>
            For styling my website, I&apos;ve chosen TailwindCSS and DaisyUI.
            TailwindCSS is a utility-first CSS framework that allows for highly
            customizable designs with a low-level, component-friendly approach.
            It promotes consistency, productivity and maintainability across the
            project. DaisyUI is a plugin for TailwindCSS that provides beautiful
            UI components, making it easier to build a consistent and visually
            appealing interface. Together, they offer a powerful combination for
            creating unique, responsive, and user-friendly designs.
          </dd>
          <dt className="text-secondary text-lg">TypeScript</dt>
          <dd>
            I take code quality seriously, and that&apos;s why I&apos;ve
            implemented TypeScript in my development process. TypeScript is a
            statically typed superset of JavaScript, which helps catch errors
            during development and enhances code maintainability and
            scalability. It ensures that my codebase remains clean, readable,
            and reliable.
          </dd>
          <dt className="text-secondary text-lg">GitHub Copilot</dt>
          <dd>
            To streamline and enhance my coding process, I&apos;ve integrated
            GitHub Copilot into my development workflow. Copilot provides
            intelligent code suggestions and automation, making coding more
            efficient and helping me deliver high-quality code faster.
          </dd>
        </dl>
        <p>
          My technology stack represents my commitment to delivering a
          high-quality, performant, and visually pleasing website. By using
          React, Next.js, Material UI, TypeScript, I&apos;ve created a platform
          that not only showcases my content effectively but also provides a
          delightful user experience. I continuously update and optimize my
          technology stack to ensure that my website remains at the forefront of
          web development standards.
        </p>
        <p>
          Thank you for visiting my website and for taking an interest in the
          the technologies behind it. I&apos;m dedicated to staying at the
          cutting edge of web development, and I hope you enjoy your experience
          here. If you have any questions or feedback, feel free to get in touch
          with me! You can find the source code for this website on my github at
          the link below.
        </p>
      </div>
      <div className="text-center py-4">
        <a
          className="sm:hidden"
          href="https://github.com/DarickMcBride"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="btn btn-circle btn-ghost text-primary"
            size={32}
          />
        </a>
        <button className="btn btn-primary hidden sm:flex">
          GitHub
          <FaGithub className="h-6 w-6" />
        </button>
      </div>
    </main>
  );
}

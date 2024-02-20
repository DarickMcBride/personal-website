import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex  flex-col items-center z-10">
      <h1 className={`text-primary text-2xl font-bold p-4 `}>WELCOME</h1>
      <div className="space-y-3">
        <p>
          I firmly believe in leveraging the power of technology to create
          engaging and dynamic online experiences. My website is built on a
          robust and modern technology stack that combines the best tools and
          frameworks to deliver a seamless and visually appealing user
          experience. Here&apos;s a closer look at the technologies I&apos;ve
          used to craft this site:
        </p>
        <div className="carousel ">
          <div
            id="item1"
            className="carousel-item flex flex-col items-center max-w-full"
          >
            <div className="card bg-accent bg-opacity-40 shadow-xl px-12 h-auto">
              <div className="card-body">
                <h2 className="card-title text-secondary font-semibold">
                  React
                </h2>
                <p className="text-base-content">
                  At the heart of my website is React, a popular JavaScript
                  library for building user interfaces. React allows me to
                  create interactive and responsive web applications that
                  provide a smooth and enjoyable browsing experience. It&apos;s
                  the foundation of my website&apos;s frontend, enabling me to
                  build complex UI components and manage state efficiently.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                  <a href="#item5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#item2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item2"
            className="carousel-item flex flex-col items-center max-w-full"
          >
            <div className="card bg-accent bg-opacity-40 shadow-xl px-12 h-auto">
              <div className="card-body">
                <h2 className="card-title text-secondary font-semibold">
                  Next.js (App Router)
                </h2>
                <p className="text-base-content">
                  I&apos;ve leveraged Next.js, a powerful framework built on top
                  of React, to enhance the performance and SEO-friendliness of
                  my website. Next.js enables server-side rendering, automatic
                  code splitting, and simplified routing, all of which
                  contribute to faster load times and a better overall user
                  experience.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#item1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#item3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item3"
            className="carousel-item flex flex-col items-center max-w-full"
          >
            <div className="card bg-accent bg-opacity-40 shadow-xl px-12 h-auto">
              <div className="card-body">
                <h2 className="card-title text-secondary font-semibold">
                  Tailwind CSS and daisyUI
                </h2>
                <p className="text-base-content">
                  For styling my website, I&apos;ve chosen Tailwind CSS and
                  daisyUI. Tailwind CSS is a utility-first CSS framework that
                  allows for highly customizable designs with a low-level,
                  component-friendly approach. It promotes consistency,
                  productivity and maintainability across the project. daisyUI
                  is a plugin for Tailwind CSS that provides beautiful UI
                  components, making it easier to build a consistent and
                  visually appealing interface. Together, they offer a powerful
                  combination for creating unique, responsive, and user-friendly
                  designs.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#item2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#item4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*   <div
            id="item4"
            className="carousel-item flex flex-col items-center max-w-full"
          >
            <div className="card bg-accent bg-opacity-40 shadow-xl px-12">
              <div className="card-body">
                <h2 className="card-title text-secondary font-semibold">
                  TypeScript
                </h2>
                <p className="text-base-content">
                  I take code quality seriously, and that&apos;s why I&apos;ve
                  implemented TypeScript in my development process. TypeScript
                  is a statically typed superset of JavaScript, which helps
                  catch errors during development and enhances code
                  maintainability and scalability. It ensures that my codebase
                  remains clean, readable, and reliable.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#item3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#item5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item5"
            className="carousel-item flex flex-col items-center max-w-full"
          >
            <div className="card bg-accent bg-opacity-40 shadow-xl px-12">
              <div className="card-body">
                <h2 className="card-title text-secondary font-semibold">
                  GitHub Copilot
                </h2>
                <p className="text-base-content">
                  At the heart of my website is React, a popular JavaScript
                  I&apos;ve integrated GitHub Copilot into my development
                  workflow to streamline and enhance my code. Copilot provides
                  intelligent code suggestions and automation, making coding
                  more efficient and helping me deliver high-quality code
                  faster.
                </p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#item4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#item1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <p>
          My technology stack represents my commitment to delivering a
          high-quality, performant, and visually pleasing website. By using
          React, Next.js, Tailwind CSS, daisyUI, TypeScript, I&apos;ve created a
          platform that not only showcases my content effectively but also
          provides a delightful user experience. I continuously update and
          optimize my technology stack to ensure that my website remains at the
          forefront of web development standards.
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
        <a
          className="btn btn-primary hidden sm:flex"
          href="https://github.com/DarickMcBride"
        >
          GitHub
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default function TechCarousel() {
  return (
    <div className="carousel carousel-center w-96 sm:min-w-full">
      <div id="item1" className="carousel-item w-full">
        <div className="card bg-accent bg-opacity-60 px-12">
          <div className="card-body">
            <h2 className="card-title text-secondary font-semibold">React</h2>
            <p className="text-base-content">
              At the heart of my website is React, a popular JavaScript library
              for building user interfaces. React allows me to create
              interactive and responsive web applications that provide a smooth
              and enjoyable browsing experience. It&apos;s the foundation of my
              website&apos;s frontend, enabling me to build complex UI
              components and manage state efficiently.
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
      <div id="item2" className="carousel-item w-full">
        <div className="card bg-accent bg-opacity-40 px-12">
          <div className="card-body">
            <h2 className="card-title text-secondary font-semibold">
              Next.js (App Router)
            </h2>
            <p className="text-base-content">
              I&apos;ve leveraged Next.js, a powerful framework built on top of
              React, to enhance the performance and SEO-friendliness of my
              website. Next.js enables server-side rendering, automatic code
              splitting, and simplified routing, all of which contribute to
              faster load times and a better overall user experience.
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
      <div id="item3" className="carousel-item w-full">
        <div className="card bg-accent bg-opacity-40 px-12">
          <div className="card-body">
            <h2 className="card-title text-secondary font-semibold">
              Tailwind CSS and daisyUI
            </h2>
            <p className="text-base-content">
              For styling my website, I&apos;ve chosen Tailwind CSS and daisyUI.
              Tailwind CSS is a utility-first CSS framework that allows for
              highly customizable designs with a low-level, component-friendly
              approach. It promotes consistency, productivity and
              maintainability across the project. daisyUI is a plugin for
              Tailwind CSS that provides beautiful UI components, making it
              easier to build a consistent and visually appealing interface.
              Together, they offer a powerful combination for creating unique,
              responsive, and user-friendly designs.
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
      <div id="item4" className="carousel-item w-full">
        <div className="card bg-accent bg-opacity-40 px-12">
          <div className="card-body">
            <h2 className="card-title text-secondary font-semibold">
              TypeScript
            </h2>
            <p className="text-base-content">
              I take code quality seriously, and that&apos;s why I&apos;ve
              implemented TypeScript in my development process. TypeScript is a
              statically typed superset of JavaScript, which helps catch errors
              during development and enhances code maintainability and
              scalability. It ensures that my codebase remains clean, readable,
              and reliable.
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
            className="carousel-item w-full"
          >
            <div className="card bg-accent bg-opacity-40  px-12">
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
  );
}
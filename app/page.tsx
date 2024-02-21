import { FaGithub } from "react-icons/fa";
import TechCarousel from "./components/TechCarousel";
import TechMobile from "./components/TechMobile";

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
        <div className="justify-center hidden sm:flex">
          <TechCarousel />
        </div>
        <div className=" sm:hidden">
          <TechMobile />
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

import SkillsList from "../components/SkillsList";

export default function AboutPage() {
  const yearsSince = () => {
    const startYear = 2018;
    const startMonth = 9; // October is the 10th month, but JavaScript months are zero-indexed, so October is month 9
    const startDate = new Date(startYear, startMonth);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      years--;
    }
    return years;
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-20">
      <h1 className="text-primary text-2xl p-4">About Me</h1>
      <div className="space-y-3">
        <p>
          Hello there! My name is{" "}
          <span className="text-secondary">Darick McBride</span> and I am a
          passionate Senior Software Developer with over {yearsSince()} years of
          industry experience. When I&rsquo;m not knee-deep in code, you can
          often find me exploring the beauty of nature or spending quality time
          with my furry friend Pixel.
        </p>
        <p>
          My journey as a software developer started with a fascination for
          turning lines of code into functional and user-friendly applications.
          Over the years, I&rsquo;ve honed my skills and developed a profound
          expertise in React, a technology that has revolutionized web
          development and created endless possibilities for building
          interactive, dynamic, and engaging web applications.
        </p>
        <p>
          I believe that inspiration often strikes when surrounded by the beauty
          of nature, whether it&rsquo;s hiking through scenic trails or taking a
          moment to soak in the serenity of a campsite. This connection with the
          natural world fuels my creativity and keeps me motivated to craft
          elegant, efficient, and sustainable software solutions.
        </p>
        <p>
          When I&rsquo;m not in front of my computer screen, you&rsquo;ll likely
          find me on a hiking trail, capturing breathtaking landscapes with my
          camera, or simply unwinding with my pupper. My passion for dogs has
          led me to appreciate loyalty, dedication, and the importance of a
          strong support system, values that I also bring to my work as a
          developer.
        </p>
        <p>
          I&rsquo;m excited to share my journey, my work, and my enthusiasm for
          coding on this website. Here, you&rsquo;ll get a glimpse of my
          projects, explore my website I&rsquo;ve built, and get a sense of the
          skills and dedication I bring to every endeavor. Whether you&rsquo;re
          a fellow developer, a future employer, or just someone who shares a
          love for dogs and the great outdoors, I&rsquo;m always open to
          connecting, sharing ideas, and embarking on new adventures.
        </p>
        <p> Here are some of the skills I&rsquo;ve acquired over the years:</p>
        <SkillsList />
        <p>
          Thank you for visiting my website. Feel free to reach out, and
          let&rsquo;s explore the limitless possibilities of software
          development and the world beyond our screens together.
        </p>
      </div>
    </div>
  );
}

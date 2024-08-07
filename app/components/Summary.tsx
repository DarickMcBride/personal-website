export default function Summary() {
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
    <div className="space-y-3 text-base-content">
      <p>
        I am a{" "}
        <span className="font-semibold text-primary">Full Stack Engineer</span>{" "}
        with {yearsSince()}+ years of industry experience. I&apos;m driven by
        the challenge of transforming code into user-centric solutions. My
        expertise is in{" "}
        <span className="font-semibold text-primary">React</span>{" "}
        apps, which has been a game-changer in crafting interactive web
        experiences. Beyond coding, nature is my muse, inspiring me to create
        software that is not only functional but also harmonious and
        sustainable.
      </p>
      <p>
        Away from the keyboard, I&apos;m an avid camper and dog lover, finding
        joy and inspiration in the great outdoors with my loyal companion,
        Pixel. These adventures reinforce the values of loyalty and support that
        I infuse into my professional life. I also lead the{" "}
        <a
          className="font-semibold text-primary hover:text-secondary hover:underline"
          href="https://www.meetup.com/tech-code-collective-sacramento-folsom-roseville/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech && Code
        </a>{" "}
        meetup in Sacramento, fostering a community where developers can
        exchange ideas and grow.
      </p>
      <p>
        This website is a window into my professional journey, showcasing my
        projects and the passion I bring to each one.
      </p>
    </div>
  );
}

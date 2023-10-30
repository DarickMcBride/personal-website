import { Typography } from "@mui/material";

//calculate number of years since Oct 2018
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

const AboutPage = () => {
  return (
    <>
      <Typography variant="h4" color="primary" gutterBottom>
        About Me
      </Typography>
      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        Hello there! My name is{" "}
        <Typography variant="body1" color="secondary" component="strong">
          Darick McBride
        </Typography>{" "}
        and I am a passionate Senior Software Developer with {yearsSince()}{" "}
        years of industry experience. When I&rsquo;m not knee-deep in code, you
        can often find me exploring the beauty of nature or spending quality
        time with my furry friend Pixel.
      </Typography>

      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        My journey as a software developer started with a fascination for
        turning lines of code into functional and user-friendly applications.
        Over the years, I&rsquo;ve honed my skills and developed a profound
        expertise in React, a technology that has revolutionized web development
        and created endless possibilities for building interactive, dynamic, and
        engaging web applications.
      </Typography>
      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        I believe that inspiration often strikes when surrounded by the beauty
        of nature, whether it&rsquo;s hiking through scenic trails or taking a
        moment to soak in the serenity of a campsite. This connection with the
        natural world fuels my creativity and keeps me motivated to craft
        elegant, efficient, and sustainable software solutions.
      </Typography>
      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        When I&rsquo;m not in front of my computer screen, you&rsquo;ll likely
        find me on a hiking trail, capturing breathtaking landscapes with my
        camera, or simply unwinding with my pupper. My passion for dogs has led
        me to appreciate loyalty, dedication, and the importance of a strong
        support system, values that I also bring to my work as a developer.
      </Typography>
      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        I&rsquo;m excited to share my journey, my work, and my enthusiasm for
        coding on this portfolio website. Here, you&rsquo;ll get a glimpse of my
        projects, explore my website I&rsquo;ve built, and get a sense of the
        skills and dedication I bring to every endeavor. Whether you&rsquo;re a
        fellow developer, a future employer, or just someone who shares a love
        for dogs and the great outdoors, I&rsquo;m always open to connecting,
        sharing ideas, and embarking on new adventures.
      </Typography>
      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        Thank you for visiting my portfolio. Feel free to reach out, and
        let&rsquo;s explore the limitless possibilities of software development
        and the world beyond our screens together.
      </Typography>
    </>
  );
};

export default AboutPage;

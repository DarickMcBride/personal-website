import { Box, Typography, Button, Stack } from "@mui/material";

const PageContent = () => {
  return (
    <>
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome to my website!
      </Typography>
      <Stack spacing={1}>
        <Typography sx={{ pb: 3 }} variant="body1" gutterBottom>
          I firmly believe in the power of technology to create engaging and
          dynamic online experiences. My website is built on a robust and modern
          technology stack that combines the best tools and frameworks to
          deliver a seamless and visually appealing user experience.
          Here&rsquo;s a closer look at the technologies I&rsquo;ve used to
          craft this site:
        </Typography>
        <Box sx={{ pl: 4 }}>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              React:{" "}
            </Typography>
            <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
              At the heart of my website is React, a popular JavaScript library
              for building user interfaces. React allows me to create
              interactive and responsive web applications that provide a smooth
              and enjoyable browsing experience. It&rsquo;s the foundation of my
              website&rsquo;s frontend, enabling me to build complex UI
              components and manage state efficiently.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              Next.js:{" "}
            </Typography>
            <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
              I&rsquo;ve leveraged Next.js, a powerful framework built on top of
              React, to enhance the performance and SEO-friendliness of my
              website. Next.js enables server-side rendering, automatic code
              splitting, and simplified routing, all of which contribute to
              faster load times and a better overall user experience.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              Material UI:{" "}
            </Typography>
            <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
              For the design and aesthetics of my website, I&rsquo;ve chosen
              Material UI, a popular React UI framework based on Google&rsquo;s
              Material Design principles. Material UI provides a wealth of
              pre-designed components and styling options, allowing me to
              maintain a clean and visually appealing design while saving
              development time.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              TypeScript:{" "}
            </Typography>
            <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
              I take code quality seriously, and that&rsquo;s why I&rsquo;ve
              implemented TypeScript in my development process. TypeScript is a
              statically typed superset of JavaScript, which helps catch errors
              during development and enhances code maintainability and
              scalability. It ensures that my codebase remains clean, readable,
              and reliable.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              Netlify:{" "}
            </Typography>
            <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
              Hosting and deployment are essential aspects of any web project.
              I&rsquo;ve opted for Netlify, a reliable and easy-to-use platform
              that simplifies the deployment process. With features like
              continuous integration and automated deployments, I can maintain
              my website with ease, ensuring it&rsquo;s always up-to-date and
              running smoothly.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              GitHub Copilot{" "}
            </Typography>
            <Typography sx={{ pb: 3 }} variant="body1" gutterBottom>
              To streamline and enhance my coding process, I&rsquo;ve integrated
              GitHub Copilot into my development workflow. Copilot provides
              intelligent code suggestions and automation, making coding more
              efficient and helping me deliver high-quality code faster.
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
          My technology stack represents my commitment to delivering a
          high-quality, performant, and visually pleasing website. By using
          React, Next.js, Material UI, TypeScript, and Netlify, I&rsquo;ve
          created a platform that not only showcases my content effectively but
          also provides a delightful user experience. I continuously update and
          optimize my technology stack to ensure that my website remains at the
          forefront of web development standards.
        </Typography>
        <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
          Thank you for visiting my website and for taking an interest in the
          the technologies behind it. I&rsquo;m dedicated to staying at the
          cutting edge of web development, and I hope you enjoy your experience
          here. If you have any questions or feedback, feel free to get in touch
          with me! You can find the source code for this website on my github at
          the link below.
        </Typography>
      </Stack>
      <Button
        variant="contained"
        color="secondary"
        href="https://github.com/DarickMcBride"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mr: 1 }}
      >
        github
      </Button>
    </>
  );
};

export default PageContent;

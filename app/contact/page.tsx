import { Typography, Box, Stack, Link, Container } from "@mui/material";
import ContactButtons from "./components/ui/contact-buttons";
import ContactBody from "./components/ui/contact-body";

const Page = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ pb: 3, overflowX: "hidden", position: "relative" }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        You can contact me using the links below.
      </Typography>

      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        Thank you for visiting my website! I&rsquo;m excited to connect with you
        and discuss any opportunities or inquiries you may have. There are
        several ways to get in touch with me:
      </Typography>

      <ContactButtons />
      <ContactBody>
        <Stack spacing={1}>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              1. Email:{" "}
            </Typography>
            <Typography gutterBottom>
              Feel free to reach out to me via email at{" "}
              <Link href="mailto:contactme@darickmcbride.com">
                contactme@darickmcbride.com
              </Link>
              . I check my email regularly and will do my best to respond to
              your message promptly. Whether you have a position that fits my
              expertise, a question, or just want to say hello, I&rsquo;d love
              to hear from you.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold" color="secondary">
              2. Linkedin:{" "}
            </Typography>
            <Typography gutterBottom>
              You can also connect with me on LinkedIn. Visit my LinkedIn
              profile at{" "}
              <Link
                href="https://www.linkedin.com/in/darickmcbride"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/darickmcbride
              </Link>{" "}
              to learn more about my professional background and interests.
              Don&rsquo;t hesitate to send a connection request or a direct
              message, and I&rsquo;ll be sure to respond.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="secondary" fontWeight="bold">
              3. GitHub:{" "}
            </Typography>
            <Typography gutterBottom>
              For a deeper look at my technical skills and projects, visit my
              GitHub profile at{" "}
              <Link
                href="https://github.com/DarickMcBride"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/DarickMcBride
              </Link>
              . You can explore my code repositories and see some of the
              projects I&rsquo;ve worked on. If you have any questions or would
              like to know more, I&rsquo;d be happy to discuss it. I&rsquo;m
              looking forward to hearing from you and engaging in meaningful
              conversations. Whether it&rsquo;s about business collaborations,
              tech discussions, or just a friendly chat, I&rsquo;m here to
              connect. Let&rsquo;s get in touch and explore the possibilities!
            </Typography>
          </Box>
          <Typography>
            I&rsquo;m looking forward to hearing from you and engaging in
            meaningful conversations. Whether it&rsquo;s about career
            opportunities, tech discussions, or just a friendly chat, I&rsquo;m
            here to connect. Let&rsquo;s get in touch and explore the
            possibilities!
          </Typography>
        </Stack>
      </ContactBody>
    </Box>
  );
};

export default Page;

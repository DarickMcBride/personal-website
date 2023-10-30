"use client";
import { Button, Box, useMediaQuery, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

const ContactForm = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ pb: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              color="secondary"
              href="mailto:contactme@darickmcbride.com"
              sx={{ mr: 1, fontSize: 32 }}
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              color="secondary"
              href="https://www.linkedin.com/in/darickmcbride"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 1, fontSize: 32 }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="secondary"
              href="https://github.com/DarickMcBride"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 1, fontSize: 32 }}
            >
              <GitHubIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              href="mailto:contactme@darickmcbride.com"
              sx={{ mr: 1 }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.linkedin.com/in/darickmcbride"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 1 }}
            >
              Linkedin
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="https://github.com/DarickMcBride"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 1 }}
            >
              Github
            </Button>
          </>
        )}
      </Box>
      <Typography sx={{ pb: 1 }} variant="body1" gutterBottom>
        My journey as a software developer started with a fascination for
        turning lines of code into functional and user-friendly applications.
        Over the years, I&rsquo;ve honed my skills and developed a profound
        expertise in React, a technology that has revolutionized web development
        and created endless possibilities for building interactive, dynamic, and
        engaging web applications.
      </Typography>
    </Box>
  );
};

export default ContactForm;

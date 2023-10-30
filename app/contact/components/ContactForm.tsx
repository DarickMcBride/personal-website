"use client";
import { Button, Box, useMediaQuery, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactForm = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {isMobile ? (
        <>
          <IconButton
            color="secondary"
            href="mailto:contactme@darickmcbride.com"
            sx={{ mr: 1 }}
          >
            <MailOutlineIcon />
          </IconButton>
          <IconButton
            color="secondary"
            href="https://www.linkedin.com/in/darickmcbride"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 1 }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="secondary"
            href="https://github.com/DarickMcBride"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mr: 1 }}
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
  );
};

export default ContactForm;

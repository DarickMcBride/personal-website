import { Button, Box } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        href="mailto:contactme@darickmcbride.com"
        sx={{ mr: 1 }}
      >
        Email me
      </Button>

      <Button
        variant="contained"
        color="secondary"
        href="https://www.linkedin.com/in/darickmcbride"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mr: 1 }}
      >
        My Linkedin
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href="https://github.com/DarickMcBride"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mr: 1 }}
      >
        My github
      </Button>
    </Box>
  );
};

export default ContactForm;

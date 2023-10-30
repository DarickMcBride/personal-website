import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Contact Me
        </Typography>
        <ContactForm />
      </Box>
    </>
  );
};

export default ContactPage;

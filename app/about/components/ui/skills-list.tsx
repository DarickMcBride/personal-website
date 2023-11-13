"use client";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SkillsList = () => {
  //media query for mobile
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  return (
    <Typography
      sx={{ pb: 1, pl: isMobile ? 0 : 4 }}
      variant="body1"
      gutterBottom
    >
      <span style={{ color: theme.palette.secondary.main }}>- React:</span>{" "}
      Proficient in building interactive and responsive web applications using
      React.
      <br />
      <span style={{ color: theme.palette.secondary.main }}>
        - Material UI:
      </span>{" "}
      Skilled in designing elegant and user-friendly interfaces with Material UI
      components.
      <br />
      <span style={{ color: theme.palette.secondary.main }}>- Git:</span>{" "}
      Experienced in version control and collaboration using Git.
      <br />
      <span style={{ color: theme.palette.secondary.main }}>- C#:</span> Skilled
      in C# programming for back end web development.
      <br />
      <span style={{ color: theme.palette.secondary.main }}>
        - Node.js:
      </span>{" "}
      Proficient in building server-side applications and APIs with Node.js.
      <br />
      <span style={{ color: theme.palette.secondary.main }}>
        - GitHub Copilot:
      </span>{" "}
      Proficient in leveraging GitHub Copilot for enhanced coding productivity
      and assistance.
      <br /> <span style={{ color: theme.palette.secondary.main }}>
        - SQL:
      </span>{" "}
      Proficient in working with relational databases and writing SQL queries to
      manage and retrieve data.
    </Typography>
  );
};

export default SkillsList;

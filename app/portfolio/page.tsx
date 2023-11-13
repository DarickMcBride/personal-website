import Image from "next/image";
import { Box, Typography } from "@mui/material";

const projects = [
  {
    name: "Project 1",
    description: "This is the first project",
    image: "https://via.placeholder.com/150",
    githubLink: "https://github.com/user/project1",
  },
  {
    name: "Project 2",
    description: "This is the second project",
    image: "https://via.placeholder.com/150",
    githubLink: "https://github.com/user/project2",
  },
  {
    name: "Project 3",
    description: "This is the third project",
    image: "https://via.placeholder.com/150",
    githubLink: "https://github.com/user/project3",
  },
];

const Page = () => {
  return (
    <Box>
      <Typography variant="h4">Portfolio</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {projects.map((project) => (
          <Box key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Image
              width={350}
              height={350}
              src={project.image}
              alt={project.name}
            />
            <a href={project.githubLink}>GitHub</a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Page;

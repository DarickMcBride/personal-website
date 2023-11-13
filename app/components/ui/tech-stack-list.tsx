"use client";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface TechStackListProps {
  children: React.ReactNode;
}

const TechStackList = ({ children }: TechStackListProps) => {
  //media query for mobile
  const isMobile = useMediaQuery("(max-width:600px)");

  return <Box sx={{ pl: isMobile ? 0 : 4 }}>{children}</Box>;
};

export default TechStackList;

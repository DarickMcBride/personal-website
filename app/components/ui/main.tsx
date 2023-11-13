import { Box, CssBaseline } from "@mui/material";
import AppBar from "./app-bar";
import Image from "next/legacy/image";

const Main = (props: { children: any }) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      <Box component="main" sx={{ mt: 5, p: 3 }}>
        {children}
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            top: "52%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.3, // set the opacity of the background
            zIndex: -1, // set the z-index to be behind the content
          }}
        >
          <Image src="/icon.svg" alt="Logo" layout="fill" objectFit="contain" />
        </div>
      </Box>
    </Box>
  );
};

export default Main;

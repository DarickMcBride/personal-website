import * as React from "react";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import ThemeRegistry from "./components/theme/registry";
import Main from "./components/ui/main";

export const metadata: Metadata = {
  title: "Darick's Website",
  description: "Portfolio website for Darick",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Main>
            <Box sx={{ width: "90%", p: 4, mr: { md: 0, lg: 50, xl: 75 } }}>
              {children}
            </Box>
          </Main>
        </ThemeRegistry>
      </body>
    </html>
  );
}

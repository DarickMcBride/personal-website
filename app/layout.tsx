import * as React from "react";
import type { Metadata } from "next";
import ThemeRegistry from "./components/ThemeRegisty/ThemeRegistry";
import Main from "./Main";

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
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Main>{children}</Main>
        </ThemeRegistry>
      </body>
    </html>
  );
}

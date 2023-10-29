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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/logo.svg" />
      </head>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Main>{children}</Main>
        </ThemeRegistry>
      </body>
    </html>
  );
}

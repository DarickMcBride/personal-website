import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import AppBar from "./components/archive/AppBar";
import Background from "./components/Background";

export const metadata: Metadata = {
  title: "Darick McBride - Software Developer",
  description:
    "This is a personal website for Darick McBride, a software developer based in the United States. Here you can learn more about Darick, his skills, and his projects. You can also get in touch with him to discuss opportunities or collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Background />

          <main className=" flex justify-center overflow-y-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

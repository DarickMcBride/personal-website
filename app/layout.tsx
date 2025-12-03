import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Background from "../Background";

export const metadata: Metadata = {
  title: "Darick McBride - Software Engineer",
  description:
    "This is a personal website for Darick McBride, a software engineer based in the United States. Here you can learn more about Darick, his skills, and his projects. You can also get in touch with him to discuss opportunities or collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide scroll-smooth">
      <body>
        <Providers>
          <Background />

          <main className="absolute inset-0 ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

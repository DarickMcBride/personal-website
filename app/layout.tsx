import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
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
    <html lang="en" className="scroll-smooth scrollbar-hide">
      <body>
        <Providers>
          <Background />

          <main className="inset-0 absolute ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

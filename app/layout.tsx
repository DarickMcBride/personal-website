import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import AppBar from "./components/AppBar";
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
          <AppBar />

          <Background />
          <main className=" flex items-center justify-center backdrop-filter backdrop-blur-lg z-10  ">
            <div className="max-w-sm mx-8 pt-20 pb-10 sm:max-w-screen-lg">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

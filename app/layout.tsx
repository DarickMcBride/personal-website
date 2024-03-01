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

          <main className=" flex items-center justify-center overflow-y-auto">
            <div className="mx-4 sm:mx-10 pt-20 pb-10 sm:max-w-screen-2xl z-10">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

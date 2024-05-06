"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider themes={["night"]} enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}

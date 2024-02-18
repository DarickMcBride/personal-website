"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={["night", "light"]}
      defaultTheme="night"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}

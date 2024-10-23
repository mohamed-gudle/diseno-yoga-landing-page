"use client";
import { createContext, ReactNode, useState } from "react";

type Theme = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ThemeContext = createContext<Theme>({
  mode: "light",
  setMode: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  function handleSetMode(mode: string) {
    setMode(mode);
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }
  return (
    <ThemeContext.Provider
      value={{
        mode: mode,
        setMode: handleSetMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

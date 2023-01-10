import { useLayoutEffect, useState } from "react";
import { localStorageService } from "services/localStorage.service";

const savedTheme = localStorageService.getTheme();

export const useTheme = () => {
  const [theme, setTheme] = useState(savedTheme || "light");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorageService.setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

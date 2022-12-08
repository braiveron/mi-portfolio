import React, { createContext, useState, useContext } from "react";

const themeStylesRight = {
  dark: {
    backgroundRight: "hsl(316, 30%, 36%)",
    backgroundLeft: "hsl(257, 8%, 18%)",
    textColor: "hsl(57, 97%, 85%)",
  },
  light: {
    backgroundRight: "hsl(164, 61%, 65%)",
    backgroundLeft: "hsl(57, 97%, 85%)",
    textColor: "hsl(257, 8%, 18%)",
  },
};

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  const value = {
    theme: themeStylesRight[theme],
    toggleTheme,
    themeName: theme,
  };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };

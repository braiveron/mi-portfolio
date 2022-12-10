import React, { createContext, useState, useContext } from "react";

const themeStylesRight = {
  dark: {
    backgroundRight: "hsl(316, 30%, 36%)",
    backgroundLeft: "hsl(257, 8%, 18%)",
    textColor: "hsl(270, 12%, 93%)",
    borderLink: "1px hsl(270, 12%, 93%)",
    bgcInfo: "hsl(257, 8%, 18%)",
    bgcCardInfo: "hsl(257, 8%, 18%)",
    cardShadow: "15px 15px 0 hsl(270, 12%, 93%)",
    linkShadow: "8px 8px 0 hsl(270, 12%, 93%)",
    borderCard: "4px solid hsl(270, 12%, 93%)",
    bgcProyectos: "hsl(263, 29%, 32%)",
    bgcCardProyect: "transparent",
    prueba: "red",
  },
  light: {
    prueba: "blue",
    backgroundRight: "hsl(164, 61%, 65%)",
    backgroundLeft: "hsl(57, 97%, 85%)",
    textColor: "hsl(257, 8%, 18%)",
    borderLink: "2px hsl(257, 8%, 18%)",
    bgcInfo: "hsl(270, 12%, 93%)",
    bgcCardInfo: "hsl(270, 12%, 93%)",
    cardShadow: "15px 15px 0 #404040",
    linkShadow: "8px 8px 0 #404040",
    borderCard: "4px solid #404040",
    bgcProyectos: "hsl(264, 51%, 71%)",
    bgcCardProyect: "hsl(270, 12%, 93%)",
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

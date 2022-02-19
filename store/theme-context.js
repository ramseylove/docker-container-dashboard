import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  changeThemeHandler: function () {},
});

export function ThemeContextProvider(props) {
  const [currentTheme, setCurrentTheme] = useState("light");

  if (typeof window !== "undefined" && localStorage.getItem("theme")) {
    const localTheme = localStorage.getItem("theme");
    setCurrentTheme(localTheme);
  }

  //   if (currentTheme) {
  //     document.documentElement.setAttribute("data-theme", currentTheme);
  //   }

  function changeThemeHandler() {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }

  const context = {
    theme: currentTheme,
    changeThemeHandler: changeThemeHandler,
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;

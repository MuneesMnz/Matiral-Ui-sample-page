import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdadeContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}
export function useThemeUpdate(){
    return useContext(ThemeUpdadeContext)
}

export function ThemeProviders({ children }) {
  const [darkTheme, setDarktheme] = useState(true);

  function toggleTheme() {
    setDarktheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdadeContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdadeContext.Provider>
    </ThemeContext.Provider>
  );
}

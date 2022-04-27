import React, { createContext, useState } from "react";
import { PaletteMode, useMediaQuery } from '@mui/material';

const _LIGHT: PaletteMode = "light";
const _DARK: PaletteMode = "dark";
interface IThemeContext {
  mode: PaletteMode,
  toggleMode: () => any
};

export const ThemeContext = createContext<IThemeContext>({
  mode: _LIGHT,
  toggleMode: () => { }
});

const _ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? _DARK : _LIGHT)

  const toggleMode = () => {
    mode === _LIGHT ? setMode(_DARK) :
      setMode(_LIGHT)
  }

  return (
    <ThemeContext.Provider
      value={{
        mode: mode,
        toggleMode: () => toggleMode()
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default _ThemeProvider;

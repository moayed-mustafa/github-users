import { createContext, useEffect, useState } from "react";

const _LIGHT = 'light';
const _DARK = 'dark';
// crate interface
interface IThemeContext {
  mode: string,
  toggleMode: () => any
}
// create context
export const ThemeContext = createContext<IThemeContext>({
  mode: _LIGHT,
  toggleMode: () => { }
})

const _ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(_DARK)

  const toggleMode = () => {
    console.log({ mode })
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

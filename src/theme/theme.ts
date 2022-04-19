import { createTheme } from '@mui/material/styles';
import { Colors } from "./colors.ts"
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    primary: { main: Colors.light.azureBlue() },
    secondary: { main: Colors.light.lightGrey() },
    error: { main: Colors.light.red() },
    mode,
    ...(mode === "light" ? {
      background: {
        default: Colors.light.lightGrey(),
        paper: Colors.light.white(),
      },
      text: {
        primary: Colors.light.darkGrey(),
        secondary: Colors.light.lightGrey(),
      },
    } : {
      background: {
        default: Colors.dark.darkGrey(),
        paper: Colors.dark.lightGrey(),
      },
      text: {
        primary: Colors.dark.white(),
        secondary: Colors.dark.lightGrey(),
      },
    })
  }
});

export const buildTheme = (mode: PaletteMode) => {
  return createTheme(getDesignTokens(mode));
};

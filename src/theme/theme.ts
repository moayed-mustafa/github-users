import { createTheme } from '@mui/material/styles';
import { Colors } from "./colors"
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    primary: { main: Colors.light.azureBlue() },
    secondary: { main: Colors.light.lightGrey() },
    error: { main: Colors.light.red() },
    info: { main: Colors.dark.darkGrey() },
    mode: 'light' as PaletteMode,
    ...(mode === 'light' ? {
      background: {
        default: Colors.light.lighterGrey(),
        paper: Colors.light.white(),
      },
      text: {
        primary: Colors.light.darkGrey(),
        secondary: Colors.light.lighterGrey(),
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
  },
  typography: {
    fontFamily: [
      'space-mono monospace',

    ].join(','),
    h1: {
      fontSize: '26px',
      fontFamily: 'monospace',
      lineHeight: "26px",
      fontWeight: "bold",
      WhiteSpace: 'nowrap'
    },
    h2: {
      fontSize: '22px',
      fontFamily: 'monospace',
      lineHeight: "26px",
      fontWeight: "bold",
      WhiteSpace: 'nowrap'
    },
    h3: {
      fontSize: '16px',
      fontFamily: 'monospace',
      lineHeight: "26px",
      fontWeight: "bold",
      WhiteSpace: 'nowrap'
    },
    h4: {
      fontSize: '13px',
      fontFamily: 'monospace',
      lineHeight: "26px",
      fontWeight: "bold",
      WhiteSpace: 'nowrap'
    },
    body1: {
      fontSize: '10px',
      fontFamily: 'monospace',
      lineHeight: "26px",
      fontWeight: "bold",
      WhiteSpace: 'nowrap'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontFamily: "monospace",
          fontSize: "13px",
          fontWeight: "bold",
          '&:hover': {
            background: Colors.light.hoverBlue(),
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: "light",
          fontsize: "8px",
          fontFamily: "monospace",
        }
      }
    },
  }
});

export const buildTheme = (mode: PaletteMode) => {
  return createTheme(getDesignTokens(mode));
};

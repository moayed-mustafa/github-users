import Layout from "./layout/main-layout.tsx";
import { Button, Typography } from '@mui/material';
import { useContext } from "react";
import _ThemeProvider, { ThemeContext } from "./context/theme-context.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from "./theme/theme.ts";

function App() {
  const { toggleMode } = useContext(ThemeContext);
  const { mode } = useContext(ThemeContext);
  const theme = buildTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Button onClick={() => toggleMode()}> toggle mode</Button>
        <Typography >Hello div finder</Typography>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

import Layout from "./layout/main-layout.tsx";
import { useContext } from "react";
import _ThemeProvider, { ThemeContext } from "./context/theme-context.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from "./theme/theme.ts";
import Header from "./components/header.tsx";


function App() {
  const { mode } = useContext(ThemeContext);
  const theme = buildTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header></Header>
      </Layout>
    </ThemeProvider>
  );
}


export default App;


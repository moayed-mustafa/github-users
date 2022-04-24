import Layout from "./layout/main-layout.tsx";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from "./theme/theme.ts";
import Header from "./components/header.tsx";
import SearchBar from "./components/search.tsx";
import UserProvider from './context/user-context.tsx';


function App() {
  const { mode } = useContext(ThemeContext);
  const theme = buildTheme(mode);
  return (
    <UserProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <SearchBar />
      </Layout>
    </ThemeProvider>
    </UserProvider>
  );
}

export default App;

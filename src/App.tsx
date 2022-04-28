import React from 'react'
import Layout from "./layout/Layout";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserProvider from './context/user-context';
import UserCard from './components/UserCard';

function App() {
  const { mode } = useContext(ThemeContext);
  const theme = buildTheme(mode);
  return (
    <UserProvider>
    <ThemeProvider theme={theme}>
        <Layout>
          <>
        <Header />
            <SearchBar />
            <UserCard />
          </>
      </Layout>
    </ThemeProvider>
    </UserProvider>
  );
}

export default App;

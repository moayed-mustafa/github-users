import Layout from "./layout/main-layout.tsx";
import { Button, Grid, Typography } from '@mui/material';
import { useContext } from "react";
import _ThemeProvider, { ThemeContext } from "./context/theme-context.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from "./theme/theme.ts";
import { styled } from '@mui/material/styles';
import { Colors } from "./theme/colors.ts";


function App() {
  const { toggleMode } = useContext(ThemeContext);
  const { mode } = useContext(ThemeContext);
  const theme = buildTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CustomButton size='small' variant="contained" onClick={() => toggleMode()}> toggle mode</CustomButton>
        <Typography variant="h4" >Hello div finder</Typography>
      </Layout>
    </ThemeProvider>
  );
}

const CustomButton = styled(Button)({
  borderRadius: "10px",
  '&:hover': {
    backgroundColor: Colors.light.hoverBlue(),
  },
})
export default App;


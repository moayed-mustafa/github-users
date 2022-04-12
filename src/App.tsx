// import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <CssBaseline>
      <Container>
        <Box sx={{
          background: "red",
          width: {
            xs: 100, // theme.breakpoints.up('xs')
            sm: 200, // theme.breakpoints.up('sm')
            md: 300, // theme.breakpoints.up('md')
            lg: 1000, // theme.breakpoints.up('lg')
            xl: 1000, // theme.breakpoints.up('xl')
          }
        }}>
          <h1>Git hub find users</h1>

        </Box>
      </Container>
    </CssBaseline>
  );
}

export default App;

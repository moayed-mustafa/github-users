import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface ILayout {
  children: JSX.Element
}
const Layout = ({ children }: ILayout) => {
  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <Box sx={{
          bgcolor: "orangered",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:
          {
            sm: "start",
            md: "center"
          }
        }}>
          {children}
        </Box>
      </Container>
    </CssBaseline>
  )
}
export default Layout;

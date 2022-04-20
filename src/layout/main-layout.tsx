import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { IChildren } from '../models/children.ts';

const Layout = ({ children }: IChildren) => {
  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <Box sx={{
          bgcolor: "background.paper",
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

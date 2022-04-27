import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { IChildren } from '../models/children';

const Layout = ({ children }: IChildren) => {
  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <Box sx={{
          bgcolor: "background.default",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:
          {
            sm: "start",
            md: "center"
          },
          marginTop: {
            sm: 0,
            md: "-12rem"
          }
        }}>
          {children}
        </Box>
      </Container>
    </CssBaseline>
  )
}
export default Layout;

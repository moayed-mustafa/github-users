import React, { useContext } from "react"
import Box from '@mui/material/Box';
import { styled, Typography } from "@mui/material";
import { ThemeContext } from "../context/theme-context";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { strings } from "../strings";

const Header = () => {
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "8px",
      boxSizing: "border-box"
    }}>
      <Typography variant="h2" >{strings.mainTitle}</Typography>
      <Customtypo onClick={toggleMode} variant="h3" >{mode === "dark" ? strings.light : strings.dark}
        {
          mode === "dark" ?
            <Typography>
              <WbSunnyIcon sx={{ marginLeft: "8px", cursor: "pointer" }} ></WbSunnyIcon>
            </Typography> :
            <Typography>
              <NightlightRoundIcon sx={{ marginLeft: "8px", cursor: "pointer" }} ></NightlightRoundIcon>
            </Typography>
        }
      </Customtypo>
    </Box>
  )
}

const Customtypo = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "10px",
  display: "flex",
  '&:hover': {
    color: theme.palette.secondary.main,
    transition: "color ease-in-out 400ms"
  },
}));

export default Header;

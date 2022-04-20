import React, { useContext } from "react"
import Box from '@mui/material/Box';
import { Button, styled, Typography } from "@mui/material";
import { Colors } from "../theme/colors.ts"
import { ThemeContext } from "../context/theme-context.tsx";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// todo: Change the primary and secondary colors, beacause buttons/icons
// ?are messed up right now, also make a strings file

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
      <Typography variant="h6" >devfinder</Typography>
      <CustomButton color="secondary" size='small' variant="text" onClick={() => toggleMode()}>
        {mode === "dark" ? "light" : "dark"}{
          mode === "dark" ?
            <WbSunnyIcon color="secondary" sx={{ marginLeft: "8px" }} ></WbSunnyIcon> :
            <NightlightRoundIcon color="secondary" sx={{ marginLeft: "8px" }} ></NightlightRoundIcon>
        }
      </CustomButton>
    </Box>
  )
}

const CustomButton = styled(Button)({
  borderRadius: "10px",
  '&:hover': {
    backgroundColor: Colors.light.hoverBlue(),
  },
});

export default Header;

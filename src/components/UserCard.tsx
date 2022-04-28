import React, { useContext } from "react"
import Box from '@mui/material/Box';
import { Paper, Grid } from "@mui/material";
import { UserContext } from "../context/user-context";
import Avatar from '@mui/material/Avatar';
import SocialMediaSec from "./SocialMediaSec";
import FollowersSec from "./FollowersSec";
import MainSec from "./MainSec";

const UserCard = () => {
  const { user } = useContext(UserContext);
  if (!user) return;

  return (
    <Paper
      elevation={2}
      sx={{
        margin: "12px 0",
        width: "100%",
        minHeight: "300px",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}>
      <Box
        sx={{
          height: "100%",
          padding: "12px 8px",
          display: "grid",
          justifyItems: "center",
          alignItems: "start",
          gridTemplateColumns: "140px 2fr",
          boxSizing: "border-box",
        }}>
        <Avatar alt="user" src={user?.avatar_url} sx={{ width: "90px", height: "90px", marginTop: "2px" }}></Avatar>
        <Grid container spacing="2" direction="column" >
          <MainSec user={user} />
          <FollowersSec user={user} />
          <SocialMediaSec user={user} />
        </Grid>
      </Box>
    </Paper>
  )
};

export default UserCard;

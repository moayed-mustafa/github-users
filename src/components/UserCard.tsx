import React, { useContext } from "react"
import Box from '@mui/material/Box';
import { Typography, Paper, Grid } from "@mui/material";
import { strings } from "../strings";
import { UserContext } from "../context/user-context";
import Avatar from '@mui/material/Avatar';
import PinDropIcon from '@mui/icons-material/PinDrop';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import ApartmentIcon from '@mui/icons-material/Apartment';

const UserCard = () => {
  const { user } = useContext(UserContext);
  if (!user) return;
  let { created_at } = user;
  created_at = new Date(created_at).toDateString().slice(4);
  const iconStyles = {
    verticalAlign: "middle", marginRight: "8px"
  }
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
      {/* Main section*/}
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
          <Grid item container wrap="wrap" >
            <Grid item xs={12} sm={7}>
              <Typography variant="h4">{user?.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="body1" color="secondary">{strings.joined} {created_at}</Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography variant="body1" color="primary">@{user?.login}</Typography>
            </Grid>
            <Grid item xs={12} margin="12px 0" >
              <Typography variant="body1" color="secondary">{user.bio ? user.bio : strings.noBio}</Typography>
            </Grid>
          </Grid>

          {/* Followers section*/}
          <Box sx={{
            width: "88%",
            backgroundColor: 'background.default',
            borderRadius: "8px",
            minHeight: "60px",
            display: "flex",
            padding: "8px"
          }}>
            <Grid item container spacing="1">
              <Grid item container xs={4} direction="column" justifyContent="center" alignItems="start">
                <Grid item>
                  <Typography variant="body1" >{strings.repos}</Typography>
                </Grid>
                <Grid item >
                  {user?.public_repos}
                </Grid>
              </Grid>
              <Grid item container xs={4} direction="column" justifyContent="center" alignItems="start">
                <Grid item>
                  <Typography variant="body1" >{strings.followers}</Typography>
                </Grid>
                <Grid item >
                  {user?.followers}
                </Grid>
              </Grid>
              <Grid item container xs={4} direction="column" justifyContent="center" alignItems="start">
                <Grid item>
                  <Typography variant="body1" >{strings.following}</Typography>
                </Grid>
                <Grid item >
                  {user?.following}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* Socail Media section*/}
          <Grid container item xs={12} spacing="1" wrap="wrap" marginTop="12px">
            <Grid item container xs={12} md={6}>
              <Typography variant="body1">
                <PinDropIcon sx={iconStyles} fontSize="inherit" />
              </Typography>
              <Typography variant="body1">{user?.location ? user.location : strings.notAvailable}</Typography>
            </Grid>
            <Grid item container xs={12} md={6}>
              <Typography variant="body1">
                <TwitterIcon sx={iconStyles} fontSize="inherit" />
              </Typography>
              <Typography variant="body1">{user.twitter_username ? user.twitter_username : strings.notAvailable}</Typography>
            </Grid>
            <Grid item container xs={12} md={6}>
              <Typography variant="body1">
                <LinkIcon sx={iconStyles} fontSize="inherit" />
              </Typography>
              <Typography variant="body1">{user?.repos_url.slice(0, 23)}</Typography>
            </Grid>
            <Grid item container xs={12} md={6}>
              <Typography variant="body1">
                <ApartmentIcon sx={iconStyles} fontSize="inherit" />
              </Typography>
              <Typography variant="body1">{user?.company ? user.company : strings.notAvailable}</Typography>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
};

export default UserCard;
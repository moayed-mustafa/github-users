import React from "react"
import { Typography, Grid } from "@mui/material";
import { strings } from "../strings";
import PinDropIcon from '@mui/icons-material/PinDrop';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import ApartmentIcon from '@mui/icons-material/Apartment';

const SocialMediaSec = (({ user }) => {
  const iconStyles = {
    verticalAlign: "middle", marginRight: "8px"
  }

  return (
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
  )
});

export default SocialMediaSec;

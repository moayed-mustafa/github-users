import React from "react"
import { Typography, Grid } from "@mui/material";
import { strings } from "../strings";

const MainSec = (({ user }) => {
  let { created_at } = user;
  created_at = new Date(created_at).toDateString().slice(4);
  return (
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
    </Grid>)
})

export default MainSec;

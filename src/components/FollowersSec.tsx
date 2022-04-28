import React from "react"
import { Typography, Grid, Box } from "@mui/material";
import { strings } from "../strings";

const FollowersSec = (({ user }) => {
  return (
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
  )
});

export default FollowersSec;

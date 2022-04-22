import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Typography } from "@mui/material";
import { strings } from "../strings.ts";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
const SearchBar = () => {
  return (
    <Paper elevation={2} sx={{
      width: "100%",
      display: 'flex',
      alignItems: "center",
      padding: "4px",
      boxSizing: "border-box",
      borderRadius: "12px"
    }}>
      <IconButton >
        <SearchIcon color="primary" />
      </IconButton>
      <InputBase sx={{ width: "60%" }} />
      <Typography color="error" variant="h4">{strings.error}</Typography>
      <Button sx={{ margin: "0 2px 0 16px" }} variant="contained">{strings.search}</Button>
    </Paper>

  )
}

export default SearchBar

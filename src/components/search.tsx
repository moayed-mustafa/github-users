import React, { useContext, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Typography } from "@mui/material";
import { strings } from "../strings.ts";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { USERSAPI } from "../api/agents.ts"
import { IUser } from "../models/user-model.ts";
import { UserContext } from "../context/user-context.tsx";
import CircularProgress from '@mui/material/CircularProgress';

const SearchBar = () => {
  const emptyString = '';
  const [formValues, setFormValues] = useState<string>(emptyString)
  const [error, setError] = useState<string>(emptyString);
  const { setUser, setLoading, loading } = useContext(UserContext);

  const handleFormInput = (e: any) => {
    error !== emptyString && setError(emptyString);
    const { value } = e.target;
    setFormValues(value);
  }
  const handleClick = async () => {
    try {
      if (formValues === emptyString) {
        setError("username is required");
        return;
      }
      setLoading(true);
      setTimeout(() => { }, 5000);
      const response: IUser = await USERSAPI.getUser(formValues);
      setUser(response);
      setLoading(false);
    } catch (e) {
      setError(strings.error);
      setLoading(false);
    }
  }

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
      <InputBase sx={{ width: "60%" }} onChange={handleFormInput} />
      {error && <Typography sx={{ padding: "0 8px" }} color="error" variant="h4">{error}</Typography>}
      <Button onClick={handleClick} sx={{
        margin: "0 2px 0 auto",
        height: "34.75px",
        width: "78.8125px"
      }}
        variant="contained">
        {loading ? <CircularProgress color="error" size={25} />
          : strings.search}
      </Button>
    </Paper>
  )
}

export default SearchBar

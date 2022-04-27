import React, { useContext, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Typography } from "@mui/material";
import { strings } from "../strings";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { USERSAPI } from "../api/agents"
import { IUser } from "../models/IUser";
import { UserContext } from "../context/user-context";
import CircularProgress from '@mui/material/CircularProgress';
import styled from "@emotion/styled";

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
  const handleClear = (e) => {
    const { parentElement } = e.target;
    const inputParent = parentElement.children[1];
    const input = inputParent.children[0]
    input.value = emptyString
    setFormValues(emptyString);
    setError(emptyString)
  }

  const handleClick = async () => {
    try {
      if (formValues === emptyString) {
        setError(strings.required);
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
      {
        error === strings.error ?
          <StyledButton onClick={handleClear} variant="contained">{strings.clear} </StyledButton>
          :

          <StyledButton onClick={handleClick}
            variant="contained">
            {loading ? <CircularProgress color="info" size={25} />
              : strings.search}
          </StyledButton>
      }
    </Paper>
  )
}

const StyledButton = styled(Button)({
  margin: "0 2px 0 auto",
  height: "34.75px",
  width: "78.8125px"
})

export default SearchBar

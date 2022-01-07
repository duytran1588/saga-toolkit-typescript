import { Button, CircularProgress, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { User } from "../../../models/user";
import { authActions, LoginPayLoad, selectIsLogging } from "../authSlice";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  paper: {
    padding: "16px",
  },
}));
export default function LoginPage() {
  const classes = useStyle();
  const dispatch = useAppDispatch();
  const logging = useAppSelector(selectIsLogging);
  const userLogin: LoginPayLoad = {
    username: "userName",
    password: "password",
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={3}>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => {
              dispatch(authActions.login(userLogin));
            }}
          >
            {logging && <CircularProgress color="secondary" size={20} />} &nbsp;
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

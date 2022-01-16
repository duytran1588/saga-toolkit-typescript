import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useAppDispatch } from "../../app/hook";
import { authActions } from "../../features/auth/authSlice";

export interface HeaderProps {}

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export function Header(props: HeaderProps) {
  const classes = useStyle();
  const dispatch = useAppDispatch();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Student Management
          </Typography>
          <Button
            style={{ boxShadow: "none" }}
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(authActions.logout());
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

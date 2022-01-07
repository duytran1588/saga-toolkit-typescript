import { Button } from "@mui/material";
import * as React from "react";
import { useAppDispatch } from "../../app/hook";
import { authActions } from "../../features/auth/authSlice";

export default function Admin() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

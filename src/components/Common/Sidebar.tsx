import { Dashboard, PeopleAlt } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { NavLink } from "react-router-dom";

export interface SidebarProps {}

const useStyle = makeStyles((theme) => ({
  root: {
    // width: "100%",
    maxWidth: 280,
  },

  link: {
    textDecoration: "none",
    color: "inherit",
    "&.active > div": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
}));

export default function Sidebar(props: SidebarProps) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <List>
        <NavLink to="/admin/dashboard" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/admin/student" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText>Students</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}

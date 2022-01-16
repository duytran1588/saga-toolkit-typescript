import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../features/dashboard";
import { Header } from "../Common/Header";
import Sidebar from "../Common/Sidebar";

export default function Admin() {
  const useStyles: any = makeStyles(() => ({
    root: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridAutoColumns: "240px 1fr",
      gridTemplateAreas: `"header header" "sidebar main"`,
      minHeight: "100vh",
    },

    header: {
      gridArea: "header",
    },
    sidebar: {
      gridArea: "sidebar",
      borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
      // backgroundColor: theme.palette.background.paper,
    },
    main: {
      gridArea: "main",
      // backgroundColor: theme.palette.background.paper,
      // padding: theme.spacing(2, 3), //2 * 8 = 16px, 3 * 8 = 24px
      padding: '16px 24px'
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Switch>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/students">Students</Route>
        </Switch>
      </Box>
    </Box>
  );
}

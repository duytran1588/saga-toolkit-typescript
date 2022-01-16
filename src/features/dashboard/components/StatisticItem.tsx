import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export interface StatisticProps {
  icon: React.ReactElement;
  title: string;
  count: number;
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    border: `1px solid rgba(0, 0, 0, 0.12)`,
  },

  text: {
    textAlign: "right",
  },
}));

export default function StatisticItem({ icon, title, count }: StatisticProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Box className={classes.text}>
        <Typography variant="h5">{count}</Typography>
        <Typography variant="caption">{title}</Typography>
      </Box>
    </Paper>
  );
}

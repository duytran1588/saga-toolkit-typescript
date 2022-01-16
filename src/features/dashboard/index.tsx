import {
  ChatBubble,
  ChatRounded,
  LinearScaleSharp,
  PeopleAlt,
} from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import StatisticItem from "./components/StatisticItem";
import {
  dashboardActions,
  DashboardStatistic,
  selectStatistics,
} from "./dashboardSlice";

export interface DashboardProps {}

export default function Dashboard(props: DashboardProps) {
  const dispatch = useAppDispatch();
  const {
    maleCount,
    femaleCount,
    highMarkCount,
    lowMarkCount,
  }: DashboardStatistic = useAppSelector(selectStatistics);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return (
    <Box>
      {/* statistic */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            title="male"
            icon={<PeopleAlt fontSize="large" color="primary" />}
            count={maleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            title="female"
            icon={<ChatRounded fontSize="large" color="primary" />}
            count={femaleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            title="mark >= 8"
            icon={<ChatBubble fontSize="large" color="primary" />}
            count={highMarkCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            title="mark <= 5"
            icon={<LinearScaleSharp fontSize="large" color="primary" />}
            count={lowMarkCount}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

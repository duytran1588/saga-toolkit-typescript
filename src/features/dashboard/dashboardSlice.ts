import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { Student } from "../../models";

export interface DashboardStatistic {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistic;
  highestStudentList: Student[];
  lowestStudentList: Student[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailed(state, action: PayloadAction<string>) {
      state.loading = false;
    },
    setDashboardStatistic(state, action: PayloadAction<DashboardStatistic>) {
      state.statistics = action.payload;
    },
  },
});

//action
export const dashboardActions = dashboardSlice.actions;

//selector
export const selectStatistics = (state: RootState) => state.dashboard.statistics;

//reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;

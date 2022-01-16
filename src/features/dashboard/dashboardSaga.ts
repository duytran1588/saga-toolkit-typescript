import { all, call, put, takeLatest } from "redux-saga/effects";
import studentApi from "../../api/studentApi";
import { ListResponse, Student } from "../../models";
import { dashboardActions } from "./dashboardSlice";

function* fetchStatistic() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, {
      _page: 1,
      gender: "male",
    }),
    call(studentApi.getAll, {
      _page: 1,
      gender: "female",
    }),
    call(studentApi.getAll, {
      _page: 1,
      mark_gte: 8,
    }),
    call(studentApi.getAll, {
      _page: 1,
      mark_lte: 5,
    }),
  ]);
  const statisticList = responseList.map((res) => {
    return res.pagination._totalRows;
  });
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;

  yield put(
    dashboardActions.setDashboardStatistic({
      maleCount,
      femaleCount,
      highMarkCount,
      lowMarkCount,
    })
  );
}

function* fetchDashboardData() {
  try {
    yield all([call(fetchStatistic)]);
  } catch (err: any) {
    yield put(dashboardActions.fetchDataFailed(err.message));
  }
}

export function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData().type, fetchDashboardData);
}

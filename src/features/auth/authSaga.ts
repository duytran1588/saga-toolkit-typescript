import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { User } from "../../models/user";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(userLogin: LoginPayLoad) {
  try {
    yield delay(2000);
    localStorage.setItem("accessToken", "faketoken");
    const user: User = {
      id: "userId",
      name: "userName",
    };
    const data = {
      userLogin,
      user,
    };
    yield put(authActions.loginSuccess(data));
    yield put(push("/admin/dashboard"));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem("accessToken");

  //redirect to loginPage
  yield put(push("/login"));
}

//watching loginFlow
function* watchingLoginFlow() {
  while (true) {
    const isLogin = Boolean(localStorage.getItem("accessToken"));
    if (!isLogin) {
      const action: PayloadAction<LoginPayLoad> = yield take(authActions.login);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout); //waiting for the user logout in UI
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchingLoginFlow);
}

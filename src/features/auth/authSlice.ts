import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../../models/user";

//interface type
export interface LoginPayLoad {
  username: string;
  password: string;
}

//initialState
export interface AuthState {
  logging?: boolean;
  isLoggedIn?: boolean;
  currentUser?: User;
  loginUser?: LoginPayLoad;
}

const initialState: AuthState = {
  logging: false,
  isLoggedIn: false,
  currentUser: undefined,
  loginUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayLoad>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.logging = false;
      console.log(state.logging);
      state.isLoggedIn = true;
      console.log(action.payload);
      state.currentUser = action.payload.user;
      state.loginUser = action.payload.userLogin;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

//actions
export const authActions = authSlice.actions;

//selectors
export const selectIsLogging = (state: RootState) => state.auth.logging;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

//reducer
const authReducer = authSlice.reducer;
export default authReducer;

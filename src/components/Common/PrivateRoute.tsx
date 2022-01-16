import { Redirect, Route, RouteProps } from "react-router-dom";

export interface PrivateProps {}

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem("accessToken"));
  if (!isLoggedIn) return <Redirect to="/login" />;
  return <Route {...props} />;
}

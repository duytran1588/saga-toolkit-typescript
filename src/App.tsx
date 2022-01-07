import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/Layout/Admin";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route>Not Found</Route>
    </Switch>
  );
}

export default App;

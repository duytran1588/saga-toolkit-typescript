import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/login">Login</Route>
      <Route path="/admin">admin</Route>
      <Route>Not Found</Route>
    </Switch>
  );
}

export default App;

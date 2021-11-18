import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
    </Router>
  );
};

export default Routes;

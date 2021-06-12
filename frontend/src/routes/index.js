import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import LoggedInLayout from "../layout";

export default function Routes() {
  return (
    <Switch>
        <LoggedInLayout>
          <Route path="/" exact component={Dashboard} />
        </LoggedInLayout>
    </Switch>
  );
}
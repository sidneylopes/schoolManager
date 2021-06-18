import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from '../pages/Users';
import Students from "../pages/Students";
import LoggedInLayout from "../layout";

export default function Routes() {
  return (
    <Switch>
        <LoggedInLayout>
          <Route path="/users" exact component={Users} />
          <Route path="/students" exact component={Students} />
        </LoggedInLayout>
    </Switch>
  );
}
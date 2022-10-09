import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./screens/Login";
import Registration from "./screens/Registration";
import TaskManager from "./screens/TaskManager";

import { getToken } from "./actions";

const App = ({ getToken }) => {
  var getUser = localStorage.getItem("user-info");

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={getUser ? "/task" : "/login"} />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="/task" exact>
          <TaskManager />
        </Route>
      </Switch>
    </Router>
  );
};

// const mapStateToProps = () => {};

export default connect(null, {
  getToken,
})(App);

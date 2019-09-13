import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";

const history = createHistory();

class CustomRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/"
            render={() =>
              this.props.loggedIn ? <Redirect to="/home" /> : <Login />
            }
          />
        </Switch>
      </Router>
    );
  }
}

const mapStatetoProps = ({ Login }) => {
  const { loggedIn } = Login;
  return {
    loggedIn
  };
};

export default connect(mapStatetoProps)(CustomRouter);

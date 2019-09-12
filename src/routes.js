import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";

class CustomRouter extends Component {
  controllRedirection = () => {
    console.log("fn", this.props.loggedIn);
    if (this.props.loggedIn === true) {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/"
            exact
            render={() => this.controllRedirection(this.props)}
          />
        </Switch>
      </BrowserRouter>
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

// export default CustomRouter;

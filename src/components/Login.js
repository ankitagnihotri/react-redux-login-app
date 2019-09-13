import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyClient } from "./../actions";
import "./../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value,
      emailError: ""
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value,
      passwordError: ""
    });
  };

  handleSubmit = () => {
    if (this.state.email.length === 0) {
      this.setState({
        emailError: "Please enter Email"
      });
    } else if (this.state.password.length === 0) {
      this.setState({
        passwordError: "Please enter Password"
      });
    } else {
      this.props.verifyClient(this.state);
      this.setState({
        email: "",
        password: ""
      });
    }
  };

  loginComponent = () => (
    <div className="login-container">
      <div className="login-card">
        <h2>Log In</h2>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email: hruday@gmail.com"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <p style={{ color: "red" }}>{this.state.emailError}</p>
          <input
            name="password"
            type="password"
            placeholder="Password: hruday123"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <p style={{ color: "red" }}>{this.state.passwordError}</p>
          <button className="secondary" onClick={this.handleSubmit}>
            Login
          </button>
          {this.props.error ? (
            <div style={{ color: "red" }}>{this.props.error}</div>
          ) : null}
        </div>
      </div>
    </div>
  );

  renderComponent = props =>
    this.props.loggedIn ? (
      <Redirect
        to={{
          pathname: "/home",
          state: { from: this.props.loggedIn }
        }}
      />
    ) : (
      <this.loginComponent />
    );

  render() {
    return (
      <div>
        <this.renderComponent />
      </div>
    );
  }
}

const mapStatetoProps = ({ Login }) => {
  const { error, loggedIn } = Login;
  return {
    error,
    loggedIn
  };
};

export default connect(
  mapStatetoProps,
  {
    verifyClient
  }
)(Login);

import React, { Component } from "react";
import Navbar from "./navbar";
import Timeline from "./timeline";
import SignIn from "./sign_in";
import SignUp from "./sign_up";

import "../index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(token) {
    this.setState({ token: token });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SignIn onSubmit={this.onFormSubmit} />
        <SignUp />
        <Timeline />
        <form onSubmit={this.consoleTest}>
          <input type="submit" value="TEST" />
        </form>
      </React.Fragment>
    );
  }
}

export default App;

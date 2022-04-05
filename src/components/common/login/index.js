import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default LoginPage;


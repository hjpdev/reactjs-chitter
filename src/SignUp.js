import React, { Component } from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isSignedUp: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    fetch("https://chitter-backend-api.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          handle: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(result => console.log(result));
    if (this.state.username != "" && this.state.password != "") {
      this.isSignedUp = true;
    }
    this.render();
  }

  render() {
    var message = "";
    this.isSignedUp
      ? (message = "Sign up successful")
      : (message = "Enter details");
    return (
      <React.Fragment>
        <h3>{message}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;

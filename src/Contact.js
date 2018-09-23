import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      username: "",
      password: "",
      sessionKey: ""
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
    fetch(`https://chitter-backend-api.herokuapp.com/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          handle: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          userID: result["user_id"],
          sessionKey: result["session_key"]
        });
      });
    console.log(this.state.userID);
    console.log(this.state.sessionKey);
    const { onSubmit } = this.props;
    onSubmit(this.state.userID, this.state.sessionKey);
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}

export default NameForm;

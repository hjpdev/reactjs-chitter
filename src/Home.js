import React, { Component } from "react";
import { Fetch } from "react-data-fetching";
import NameForm from "./Contact";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
      seshUserID: "",
      seshSessionKey: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(ID, key) {
    this.setState({ seshUserID: ID, seshSessionKey: key });
    console.log(this.state.seshUserID);
    console.log(this.state.seshSessionKey);
  }

  componentDidMount() {
    fetch(`https://chitter-backend-api.herokuapp.com/peeps`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          peeps: result.map(peep => [peep["user"]["handle"], peep["body"]])
        });
      });
  }

  renderPeeps() {
    let peepsList = this.state["peeps"].map(p => (
      <div className="peepFeed">
        <li className="tweets">
          <h5>{p[0]}</h5>
          <h4>{p[1]}</h4>
        </li>
        <br />
      </div>
    ));
    return (
      <div>
        <ul className="centered">{peepsList}</ul>
      </div>
    );
  }

  render() {
    var userInfo = <NameForm onSubmit={this.onFormSubmit} />;
    var peepFeed = null;
    if (this.state.seshSessionKey == "") peepFeed = "Login to view peeps...";
    if (this.state.seshSessionKey != "") {
      userInfo = null;
      peepFeed = this.renderPeeps();
    }
    return (
      <React.Fragment>
        <div>{userInfo}</div>
        <div>{peepFeed}</div>
        <h1>{this.sessionKey}</h1>
      </React.Fragment>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import NameForm from "./Contact";
import Clock from "./Practice";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Chitter</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/nameform">NameForm</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/nameform" component={NameForm} />
            <Route path="/practice" component={Clock} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;

import React from "react";
import "./Nav.css";
import logo from "./logo.png";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand">
        <img src={logo} alt="Logo" />
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
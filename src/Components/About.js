import React, { Component } from "react";
import Greeting from "./Greeting";

export default class About extends Component {
  render() {
    return (
      <div style={{ margin: "90px 10px" }}>
        <Greeting />
      </div>
    );
  }
}

import React, { Component } from "react";
import loading from "../assets/loading.gif";

export class Spinnner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" height={"100px"} />
      </div>
    );
  }
}

export default Spinnner;

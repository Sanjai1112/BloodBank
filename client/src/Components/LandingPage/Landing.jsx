import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./landing.scss";
class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar landing={true} />
      </React.Fragment>
    );
  }
}
export default Landing;

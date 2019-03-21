import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import PropTypes from "prop-types";
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
Landing.defaultProps = {
  landing: false
};
export default Landing;

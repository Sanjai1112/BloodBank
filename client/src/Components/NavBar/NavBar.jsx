import React, { Component } from "react";
import PropTypes from "prop-types";
import "./navbar.scss";
class NavBar extends Component {
  render() {
    let { label } = this.props;
    return (
      <div className="navbar">
        <div ><img className="navbar-icon" src="https://res.cloudinary.com/sanjai/image/upload/c_thumb,w_200,g_face/v1552927095/blood_drop.png" alt="Drop" /></div>
        <button className="navbar-signout">{label}</button>
      </div>
    );
  }
}
NavBar.proptype = {
  label: PropTypes.string.isRequired
};
NavBar.defaultProps = {
  label: "Sign Out"
};
export default NavBar;

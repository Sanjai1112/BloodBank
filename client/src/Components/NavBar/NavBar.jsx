import React, { Component } from "react";
import PropTypes from "prop-types";
import "./navbar.scss";
import { Redirect } from "react-router";
class NavBar extends Component {
  state = { signin: false, signup: false };
  signupClicked = () => {
    // <Redirect to="/login" />;
    this.setState({ signup: true });
  };
  signinClicked = () => {
    // <Redirect to="/login" />;
    this.setState({ signin: true });
  };
  render() {
    if (this.state.signin) return <Redirect to="/login" />;
    if (this.state.signup) return <Redirect to="/login" />;
    let { label, landing } = this.props;
    console.log(landing);
    return (
      <div className="navbar">
        <div>
          <img
            className="navbar-icon"
            src="https://res.cloudinary.com/sanjai/image/upload/c_thumb,w_200,g_face/v1552927095/blood_drop.png"
            alt="Drop"
          />
        </div>
        {landing ? (
          <div className="btn-group">
            <button className="navbar-signup" onClick={this.signupClicked}>
              SignUp
            </button>
            <button className="navbar-signin" onClick={this.signinClicked}>
              SignIn
            </button>
          </div>
        ) : (
          <button className="navbar-signout">{label}</button>
        )}
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

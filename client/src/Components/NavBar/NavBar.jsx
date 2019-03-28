import React, { Component } from "react";
import PropTypes from "prop-types";
import "./navbar.scss";
import { Redirect } from "react-router";
class NavBar extends Component {
  state = {
    signin: false,
    signup: false,
    addPost: false,
    signout: false,
    signedIn: false,
    currentUser: {},
    admin: {}
  };
  componentWillMount() {
    let { signedIn, currentUser, admin } = this.props;
    // console.log(admin);
    if (signedIn) {
      this.setState({ signedIn: true, currentUser, admin });
    } else this.setState({ signedIn: false });
  }
  signupClicked = () => {
    // <Redirect to="/login" />;
    this.setState({ signup: true });
  };
  signinClicked = () => {
    // <Redirect to="/login" />;
    this.setState({ signin: true });
  };
  addPost = () => {
    this.setState({ addPost: true });
  };
  signoutClicked = () => {
    this.setState({ signout: true, signedIn: false });
  };
  render() {
    if (this.state.signin)
      return (
        <Redirect
          to={{ pathname: "/login", state: { signinRequested: true } }}
        />
      );
    if (this.state.signup) return <Redirect to="/login" />;
    if (this.state.addPost)
      return (
        <Redirect
          to={{
            pathname: "/posts",
            state: {
              currentUser: this.state.currentUser,
              adminDetails: this.state.admin
            }
          }}
        />
      );
    if (this.state.signout)
      return (
        // <Redirect to={{ pathname: "/login", state: { signedOut: true } }} />
        <Redirect to="/login" />
      );
    // let { landing } = this.props;
    // console.log(landing);
    return (
      <div className="navbar">
        <div>
          <img
            className="navbar-icon"
            src="https://res.cloudinary.com/sanjai/image/upload/c_thumb,w_200,g_face/v1552927095/blood_drop.png"
            alt="Drop"
          />
        </div>
        {!this.state.signedIn ? (
          <div className="btn-group">
            <button className="navbar-signup" onClick={this.signupClicked}>
              SignUp
            </button>
            <button className="navbar-signin" onClick={this.signinClicked}>
              SignIn
            </button>
          </div>
        ) : (
          <div className="btn-posts_signout">
            <button className="navbar-add_posts" onClick={this.addPost}>
              Add Request
            </button>
            <button className="navbar-signout" onClick={this.signoutClicked}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
  }
}
NavBar.proptype = {
  label: PropTypes.string.isRequired
};
NavBar.defaultProps = {
  landing: false,
  signedIn: false
};
export default NavBar;

import React, { Component } from "react";
import "./login.scss";
import { Redirect } from "react-router";
import axios from "axios";
class Adminlogin extends Component {
  state = {
    adminName: "",
    password: "",
    isError: false,
    errorMessage: "",
    showPostDetails: false,
    adminDetails: {}
  };
  componentDidMount() {
    this.mailRef.focus();
  }
  //   componentWillMount() {
  //     this.setState({
  //       adminName: "",
  //       password: "",
  //       isError: false,
  //       errorMessage: "",
  //       showPostDetails: ""
  //     });
  //   }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handlekeyDown = event => {
    if (event.keyCode === 13) {
      this.passwordRef.blur();
      this.handleClick();
    }
  };
  handleClick = () => {
    if (
      this.state.adminName.trim() === "" ||
      !this.state.adminName.trim().endsWith("@gmail.com")
    ) {
      this.setState({
        isError: true,
        errorMessage: "Admin mail should be appropraite"
      });
      this.mailRef.focus();
      return;
    }
    if (this.state.password.trim() === "") {
      this.setState({ isError: true, errorMessage: "Password is empty" });
      this.passwordRef.focus();
      return;
    }
    if (this.state.isError) {
      //To reset the error state to no error after entering all values
      this.setState({ isError: false });
    }
    let { adminName, password } = this.state;
    axios
      .post("https://onlinebloodbankmanagement.herokuapp.com/adminlogin", {
        adminName,
        password
      })
      .then(res => {
        // console.log(res.data.isError);
        if (res.data.isError) {
          // console.log("entered");
          this.setState({
            isError: res.data.isError,
            errorMessage: res.data.message
          });
        } else
          this.setState({
            showPostDetails: true,
            adminDetails: res.data.message
          });
      });
    this.setState({ adminName: "", password: "" });
  };
  render() {
    if (this.state.showPostDetails) {
      return (
        <Redirect
          to={{
            pathname: "/details",
            state: { signedIn: true, adminDetails: this.state.adminDetails }
          }}
        />
      );
    }
    return (
      <div className="login">
        <h4 className="">Admin login</h4>
        {this.state.isError ? (
          <div className="error-message">{this.state.errorMessage}</div>
        ) : (
          ""
        )}
        <input
          type="email"
          ref={ref => (this.mailRef = ref)}
          placeholder="enter your admin mail"
          name="adminName"
          value={this.state.adminName}
          onChange={this.handleChange}
        />
        <input
          type="password"
          ref={ref => (this.passwordRef = ref)}
          placeholder="enter your password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyDown={this.handlekeyDown}
        />
        <button className="submit" onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}
export default Adminlogin;

import React, { Component } from "react";
import "../Login/login.scss";
import "./PostDetails.scss";
class PostDetails extends Component {
  state = {
    // hospitalName: "",
    patientName: "",
    bloodGroup: "",
    contactNumber: "",
    additionalMessage: "",
    address: "",
    isError: false,
    errorMessage: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.addressRef.blur();
      this.handleClick();
    }
  };
  handleClick = () => {
    console.log("submit clicked");
    // if (this.state.hospitalName.trim() === "") {
    //   this.setState({ isError: true, errorMessage: "Hospital name is empty" });
    //   this.hospitalRef.focus();
    //   return;
    // } else
    if (this.state.patientName.trim() === "") {
      this.setState({ isError: true, errorMessage: "Patient name is empty" });
      this.patientRef.focus();
      return;
    } else if (this.state.bloodGroup.trim() === "") {
      this.setState({ isError: true, errorMessage: "Blood group is empty" });
      this.bloodGroupRef.focus();
      return;
    } else if (this.state.contactNumber.trim() === "") {
      this.setState({ isError: true, errorMessage: "Contact number is empty" });
      this.contactRef.focus();
      return;
    } else if (this.state.additionalMessage.trim() === "") {
      this.setState({
        isError: true,
        errorMessage: "Additional message is empty"
      });
      return;
    } else if (this.state.address.trim() === "") {
      this.setState({ isError: true, errorMessage: "Address is empty" });
      return;
    }
    if (this.state.isError) {
      this.setState({ isError: false, errorMessage: "" });
    }
    this.setState({
      // hospitalName: "",
      patientName: "",
      bloodGroup: "",
      contactNumber: "",
      additionalMessage: "",
      address: ""
    });
  };
  render() {
    return (
      <div className="login">
        <h4>Add Request</h4>
        {this.state.isError ? (
          <div className="error-message">{this.state.errorMessage}</div>
        ) : (
          ""
        )}
        {/* <input
          type="text"
          placeholder="Enter the hospital name"
          name="hospitalName"
          ref={ref => (this.hospitalRef = ref)}
          value={this.state.hospitalName}
          onChange={this.handleChange}
        /> */}
        <input
          type="text"
          placeholder="Enter the patient name"
          name="patientName"
          ref={ref => (this.patientRef = ref)}
          value={this.state.patientName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Enter a required blood group"
          name="bloodGroup"
          ref={ref => (this.bloodGroupRef = ref)}
          value={this.state.bloodGroup}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Enter the contact number"
          name="contactNumber"
          ref={ref => (this.contactRef = ref)}
          value={this.state.contactNumber}
          onChange={this.handleChange}
        />
        <textarea
          className="add-additional"
          placeholder="Enter additional messages"
          name="address"
          ref={ref => (this.additionalMessageRef = ref)}
          value={this.state.additionalMessage}
          onChange={this.handleChange}
        />
        <textarea
          className="add-address"
          placeholder="Enter the hospital address"
          name="address"
          ref={ref => (this.addressRef = ref)}
          value={this.state.address}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button className="submit" onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}
export default PostDetails;

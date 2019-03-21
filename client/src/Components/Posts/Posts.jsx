import React, { Component } from "react";
import axios from "axios";
import "./Post.scss";
class Posts extends Component {
  state = {
    fetchedDatas: [],
    isError: false,
    errorMessage: "",
    showFullMessageToggle: false,
    id: ""
  };
  componentWillMount() {
    console.log("Posts Component's ComponentwillMount is called");
    axios
      .get("http://localhost:3001/details")
      .then(res => {
        // console.log(res.data.message);
        // console.log(typeof res.data.message);
        this.setState({ fetchedDatas: res.data.message });
      })
      .catch(err => {
        console.log("Error occured " + err.messages);
        this.setState({ isError: true, errorMessage: err.message });
      });
  }
  handleClick = id => {
    // console.log("Toggle entered");
    // console.log(id);
    this.setState({
      showFullMessageToggle: !this.state.showFullMessageToggle,
      id: id
    });
  };
  render() {
    // console.log("Posts called");
    // console.log(typeof this.state.fetchedDatas);
    // console.log(this.state.fetchedDatas);
    return (
      <div>
        {this.state.fetchedDatas.map(data => {
          return (
            <div
              key={data._id}
              className="posts"
              onClick={this.handleClick.bind(this, data._id)}
              style={
                this.state.id === data._id
                  ? this.state.showFullMessageToggle
                    ? { height: "110px" }
                    : { height: "60px" }
                  : { height: "60px" }
              }
            >
              <h4>
                <span className="posts-title_head"> Patient Name</span>:
                <span className="posts-title_name">{data.patientName}</span>
              </h4>
              <div className="posts-details">
                <h4>
                  <span className="posts-title_head"> Number</span>:
                  <span className="posts-title_name">{data.contactNumber}</span>
                </h4>
                <h4>
                  <span className="posts-title_head">Group</span>:
                  <span className="posts-title_name">{data.bloodGroup}</span>
                </h4>
              </div>
              <address>
                <span className="posts-title_head">Address</span>:{data.address}
              </address>
              <p className="posts-message">
                <span className="posts-title_head">Message</span>
                {data.additionalMessage}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Posts;

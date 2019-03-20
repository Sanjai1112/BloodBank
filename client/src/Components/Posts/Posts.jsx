import React, { Component } from "react";
import axios from "axios";
import "./Post.scss";
class Posts extends Component {
  state = {
    fetchedDatas: [],
    isError: false,
    errorMessage: ""
  };
  componentWillMount() {
    console.log("Posts Component is called");
    axios
      .get("http://localhost:3001/details")
      .then(res => {
        console.log(res.data.message);
        console.log(typeof res.data.message);
        this.setState({ fetchedDatas: res.data.message });
      })
      .catch(err => {
        this.setState({ isError: true, errorMessage: err.message });
      });
  }
  render() {
    console.log("Posts called");
    console.log(typeof this.state.fetchedDatas);
    console.log(this.state.fetchedDatas);
    return (
      <div>
        {this.state.fetchedDatas.map(data => {
          return (
            <div key={data._id} className="posts">
              <h4>
                <span className="posts-title_head"> Patient Name</span>:
                <span className="posts-title_name">{data.patientName}</span>
              </h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Posts;

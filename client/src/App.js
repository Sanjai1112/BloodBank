import React, { Component } from "react";
// import Login from "./Components/Login/Login";
// import AdminLogin from "./Components/Login/AdminLogin"
import PostDetails from "./Components/PostDetails/PostDetails";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <Login /> */}
        {/* <AdminLogin /> */}
        <PostDetails />
      </div>
    );
  }
}

export default App;

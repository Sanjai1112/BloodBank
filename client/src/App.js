import React, { Component } from "react";
import Login from "./Components/Login/Login";
import AdminLogin from "./Components/Login/AdminLogin";
import PostDetails from "./Components/PostDetails/PostDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NotFound from "./Components/NotFound/NFound";
import Posts from "./Components/Posts/Posts";
// import Landing from "./Components/LandingPage/Landing";
// import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <NavBar />
          <Login />
          <AdminLogin />
          <PostDetails /> */}
          {/* <Landing /> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts" component={PostDetails} />
            <Route exact path="/details" component={Posts} />
            <Route exact path="/admin" component={AdminLogin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");

//Schemas
const User = require("./Models/userSchema");
const Admin = require("./Models/adminSchema");
const Details = require("./Models/detailsSchema");

//Database Connection
mongoose.connect(
  "mongodb://sanjai:sanjai@localhost/BloodBank?authSource=admin",
  { useNewUrlParser: true },
  (err, db) => {
    if (err) console.log("Unable to connect to the mongodb");
    else console.log("Connection established to mongdb");
  }
);

//To avoid cors error,CORS plugin is used
// app.use(cors({ origin: "http://localhost:3000" }));

//MiddleWare To  avoid cors error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//initial page
app.get("/", (req, res) => {
  res.send({ message: "I'm alive" });
});

//Signup route
app.post("/signup", async (req, res) => {
  console.log("sign up called");
  // console.log(req.body.data);
  let alreadyExists = false;
  await User.findOne({ username: req.body.data.username }, (err, result) => {
    if (result == null || result.length === 0) {
      return;
    } else if (err) {
      console.log(err.message);
    } else {
      console.log(result);
      alreadyExists = true;
    }
  });
  // await console.log(alreadyExists);
  if (!alreadyExists) {
    await User.create(
      {
        username: req.body.data.username,
        password: req.body.data.password,
        name: req.body.data.name,
        age: req.body.data.age,
        bloodgroup: req.body.data.bloodgroup,
        phone: req.body.data.phone
      },
      (err, user) => {
        if (err) {
          console.log("error occured");
          res.send({ isError: true, message: err.message });
        } else {
          console.log("Success");
          res.send({ isError: false, message: "Signed Up succesfully" });
        }
      }
    );
  } else {
    res.send({ isError: true, message: "Already username exists" });
  }
});

//login route
app.post("/login", (req, res) => {
  console.log("login called");
  User.findOne({ username: req.body.data.username }, (err, result) => {
    if (result == null || result.length === 0) {
      console.log("Username does not exists ");
      res.send({ isError: true, message: "Username does not exists" });
    } else if (err) {
      console.log(err.message);
      res.send({ isError: true, message: err.message });
    } else {
      if (result.password === req.body.data.password) {
        console.log("Successfully logedIn");
        res.send({ isError: false, message: "Succesfully logedIn" });
      } else {
        console.log("Username or password is Incorrect");
        res.send({
          isError: true,
          message: "Username or password is Incorrect"
        });
      }
    }
  });
});

//Admin login
app.post("/adminlogin", (req, res) => {
  console.log("Admin login is called");
  Admin.findOne({ adminname: req.body.adminName }, (err, result) => {
    console.log(req.body.adminName + " " + req.body.password);
    console.log(result);
    if (result === null || result.length == 0) {
      console.log("Admin Id does not exists");
      res.send({ isError: true, message: "Admin Id does not exists" });
    } else if (err) res.send({ isError: true, message: err.message });
    else {
      if (result.password === req.body.adminName) {
        return res.send({ isError: false, message: "Succesfully logged in" });
      }
      return res.send({ isError: false, message: "Admin logged in" });
    }
  });
});

//getting the information
app.get("/details", (req, res) => {
  Details.find({}, (err, result) => {
    if (err) {
      console.log(err.message);
      res.send({ isError: true, message: err.message });
    } else {
      console.log("Fetched all informations");
      res.send({ isError: false, message: result });
    }
  });
});
//Posting the information
app.post("/details", (req, res) => {
  let hospitalName = req.body.hospitalName,
    patientName = req.body.patientName,
    bloodgroup = req.body.bloodgroup,
    contactNumber = req.body.contactNumber,
    address = req.body.address,
    status = req.body.status;
  Details.create(
    { hospitalName, patientName, bloodgroup, contactNumber, address, status },
    (err, result) => {
      if (err) {
        console.log(err.message);
        res.send({ isError: true, message: err.message });
      } else {
        console.log(result);
        res.send({ isError: false, message: result });
      }
    }
  );
});
//Server listening to the port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

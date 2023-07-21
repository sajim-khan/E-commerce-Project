const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create middleware
const isLoggedIn = (req, res, next) => {
  //console.log("isLogged in middleware");
  const login = false;
  if (login) {
    next();
  } else {
    return res.status(401).json({ message: "Please Login" });
  }
};

app.get("/products", (req, res) => {
  res.status(200).send({
    message: "products are returned ",
  });
});

app.get("/api/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "user profile is working",
  });
});

app.listen(5000, () => {
  console.log(`server is running at http://localhost:5000`);
});

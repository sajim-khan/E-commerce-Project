const express = require('express')
const morgan = require('morgan')
const app = express();

app.use(morgan("dev"))

// app.get("/", (req, res) => {
//     res.status(200).send({
//       message: "welcome to server",
//     });
// })

app.get("/products", (req, res) => {
  res.status(200).send({
    message: "products are returned",
  });
});

app.listen(5000, () => {
    console.log(`server is running at http://localhost:5000`);
})
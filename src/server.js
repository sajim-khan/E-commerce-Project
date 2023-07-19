const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/products", (req, res) => {
  res.status(200).send({
    message: "products are returned",
  });
});

app.listen(5000, () => {
    console.log(`server is running at http://localhost:5000`);
})
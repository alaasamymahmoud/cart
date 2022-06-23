const express = require("express");
const cors = require("cors");

const products = require("./products.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to our website .... ");
});
app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 5500;

app.listen(port, console.log(`server running on port${port}`));



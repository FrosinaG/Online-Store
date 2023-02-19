const express = require("express");
const cors = require("cors");
const products = require("./products");
const users = require("./users");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the online store API");
});

app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
});
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
});
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const foundProducts = products.find((product) => product.id == id);
  res.send(foundProducts);
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const foundProducts = users.find((user) => user.id == id);
  res.send(foundUser);
});
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== id);
  res.send(`Product with the id ${id}delete`);
});
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`Product with the id ${id}delete`);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on port ${5000}`));

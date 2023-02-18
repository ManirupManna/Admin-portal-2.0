const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (err) => {
  let msg = err ? "error in starting server" : `Server started at port ${port}`;
  console.log(msg);
});

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.end("Hola");
});
app.listen(3000);

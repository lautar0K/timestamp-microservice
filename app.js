const express = require("express");
const app = express();
const moment = require("moment");

app.get("/", function(req, res) {
  res.end("Root");
})
app.get("/:id", function(req, res) {
  let id = req.params.id;
  let json = new Object();

  console.log(id);

  if(Number.isInteger(Number(id)) == true) {
    json.unix = id;
    json.natural = moment.unix(id).format("MMMM D, YYYY");

  } else if(Number.isInteger(Number(id)) == false
  && new Date(id) != "Invalid Date") {
    json.unix = moment(id).format("X");
    json.natural = moment(id).format("MMMM D, YYYY");
  } else {
    json.unix = null;
    json.natural = null;
  }
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

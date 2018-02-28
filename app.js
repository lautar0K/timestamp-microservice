const express = require("express");
const app = express();
const moment = require("moment");

app.get("/:id", function(req, res) {
  let id = req.params.id;
  let json = new Object();

  console.log(id);

  if(typeof Number(id) == "Number") {
    json.unix = id;
    json.natural = moment(id).format("MMMM d, YYYY");
  } else if(new Date(id) != "Invalid Date") {
    json.unix = new Date(id).getTime() / 1000;
    json.natural = moment(id).format("MMMM d, YYYY");
  } else {
    json.unix = null;
    json.natural = null;
  }
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

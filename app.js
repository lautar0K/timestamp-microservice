const express = require("express");
const app = express();
const moment = require("moment");

app.get("/:id", function(req, res) {
  let id = Number(req.params.id);
  let json = new Object();

  if(Number.isInteger(id) == true) {
    json.unix = id;
    json.natural = moment(id).format("MMMM d, YYYY");
  }
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

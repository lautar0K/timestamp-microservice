const express = require("express");
const app = express();
const moment = require("moment");

app.get("/:id", function(req, res) {
  let id = req.params.id;
  let json = new Object();

  console.log(id);

  if(Number(id) != NaN) {
    json.unix = id;
    json.natural = moment.unix(id).format("MMMM D, YYYY");
  } else if(Number(id) == NaN && new Date(id) != "Invalid Date") {
    json.unix = moment(id).format("x"));
    json.natural = id.format("MMMM D, YYYY");
  } else {
    json.unix = null;
    json.natural = null;
  }
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

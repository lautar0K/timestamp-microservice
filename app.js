const express = require("express");
const app = express();
const moment = require("moment");

app.get("/:id", function(req, res) {
  let id = req.params.id;
  let json = new Object();

  console.log(id);

  if(typeof Number(id) == "number") {
    console.log("//// Case 1 ////");
    json.unix = id;
    json.natural = moment.unix(id).format("MMMM D, YYYY");
  } else if(Number(id) == NaN) {
    console.log("//// Case 2 ////");
    json.unix = moment(id).format("X");
    json.natural = moment(id).format("MMMM D, YYYY");
  } else {
    console.log("//// Case 3 ////");
    json.unix = null;
    json.natural = null;
  }
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

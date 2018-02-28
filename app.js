const express = require("express");
const app = express();

app.get("/:id", function(req, res) {
  let id = Number(req.params.id);
  let json;

  console.log("ID is", typeof id);

  if(Number.isInteger(id) == true) {
    console.log("Is UNIX");
    json = {
      "unix": id,
      "natural": new Date(id * 1000)
    };
  }
  console.log("JSON: ", json);
  res.end(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

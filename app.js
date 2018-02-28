const express = require("express");
const app = express();

app.get("/:", function(req, res) {
  let id = Number(req.params.id);
  let json;

  if(Number.isInteger(id) == true) {
    json = {
      "unix": id,
      "natural": new Date(id * 1000)
    };
  }
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

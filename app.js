const express = require("express");
const app = express();

app.get("/:id", function(req, res) {
  let id = req.params.id;

  if(Number.isInteger(id) == true) {
    let json = {
      "unix": id,
      "natural": new Date(id * 1000)
    };
    res.end(json);
  }
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

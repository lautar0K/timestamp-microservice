const express = require("express");
const app = express();

app.get("/:id", function(req, res) {
  console.log(req.params.id);

  /* if(Number.isInteger(req) == true) {
    let json = {
      "unix": req,
      "natural": new Date(req * 1000)
    };
    res.end(json);
  }*/
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

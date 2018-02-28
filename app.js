const express = require("express");
const app = express();
const html =
"<!DOCTYPE html><title>title</title></head><body><ol><li>Success</li><li>Success</li></ol></body></html>";

app.get("/", function(req, res) {
  res.end(html);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});

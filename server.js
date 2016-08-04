const express = require("express");
var app = express();
app.get("/", function(req, resp) {
    resp.end("Hello World!!!");
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("App requesthandler running on port " + port);
});
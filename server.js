const express = require("express");
const service = require("./service.js");
var app = express();
app.use(express.static("public"));
app.get("/whoami", function(req, resp) {
    var obj = service.parseRequest(req);
    resp.json(obj);
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("App requesthandler running on port " + port);
});
var ipware = require('ipware')().get_ip;
module.exports = {
    parseRequest: function(req) {
        var ip = ipware(req).clientIp;
        console.log("req.headers = " + JSON.stringify(req.headers));
        var language = req.headers["accept-language"].split(",")[0];
        var software = req.headers["user-agent"].split("(")[1].split(";")[0];
        return {"ip": ip, "language" : language, "software" : software};
    }
};
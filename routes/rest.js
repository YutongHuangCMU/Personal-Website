var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var messageService = require("../services/messageService");

router.post("/sendMessage", jsonParser, function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    messageService.sendMessage(name, email, message);
    res.json({});
});

module.exports = router;
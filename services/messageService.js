var messageModel = require("../models/messageModel");

var sendMessage = function (name, email, message) {
    var message = new messageModel({
        name: name,
        email: email,
        message: message
    });
    message.save();
};

module.exports = {
    sendMessage: sendMessage
};
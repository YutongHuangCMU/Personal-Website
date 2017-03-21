var mongoose = require("mongoose");
var schema = mongoose.Schema;

var MessageSchema = new schema({
    name: String,
    email: String,
    message: String
});

var messageModel = mongoose.model("MessageModel", MessageSchema);

module.exports = messageModel;
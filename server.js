var express = require("express");
var app = express();

var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");

var mongoose = require("mongoose");
mongoose.connect("mongodb://yutong:123@ds125060.mlab.com:25060/personalwebsite");

app.use("/", indexRouter);
app.use("/contact/", restRouter);
app.use("/public", express.static(__dirname + "/public"));

app.listen(3000);


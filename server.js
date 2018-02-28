const express = require("express")
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require("./middleware.js")

app.use(middleware.logger);

app.get("/about", middleware.requestAuthentication,function(req,res){
	res.send("About us!");
});

app.use(express.static(__dirname+"/Public"));

app.listen(PORT, function () {
	console.log("Server started on Port : " +PORT+ "!");
});
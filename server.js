const express = require("express")
var app = express();
var middleware = require("./middleware.js")

app.use(middleware.logger);

app.get("/About", middleware.requestAuthentication,function(req,res){
	res.send("About us!");
});

app.use(express.static(__dirname+"/public"));

app.listen(3000, function () {
	console.log("Server started on Port 3000!");
});
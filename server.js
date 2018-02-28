const express = require("express")
var app = express();
var middleware = require("./middleware.js")
var PORT = process.env.PORT || 3000;
app.use(middleware.logger);

app.get("/About", middleware.requestAuthentication,function(req,res){
	res.send("About us!");
});

app.use(express.static(__dirname+"/public"));

app.listen(PORT, function () {
	console.log("Server started on Port: " +PORT+ "!");
});
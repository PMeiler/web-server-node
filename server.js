const express = require("express")
var app = express();


var middleware = {
	requestAuthentication: function(req,res,next){
		console.log("Private Route taken!")
		next();
	},
	logger: function(req,res,next){
		console.log("Request: " + new Date().toString() +" "+ req.method +"  "+ req.originalUrl );
		next();
	}
}

app.use(middleware.logger);

app.get("/About", middleware.requestAuthentication,function(req,res){
	res.send("About US!");
});

app.use(express.static(__dirname+"/public"));

app.listen(3000, function () {
	console.log("Server started on Port 3000!");
});
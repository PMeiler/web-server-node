module.exports =  {
	requestAuthentication: function(req,res,next){
		console.log("Private Route taken!")
		next();
	},
	logger: function(req,res,next){
		console.log("Request: " + new Date().toString() +" "+ req.method +"  "+ req.originalUrl );
		next();
	}
}

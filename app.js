
// require config
var express = require("express");
var app = express();


app.set("view engine", "ejs");

//ROOT ROUTE
// for that we create views/home.ejs 
app.get("/", function(req, res){ 
	res.render("home");
});


//FOTOS ROUTE
app.get("/foto", function(req, res){
	res.render("foto");
});

//PRICE ROUTE
app.get("/price", function(req, res){
	res.render("price");
});

//SERVICE ROUTE
app.get("/service", function(req, res){
	res.render("service");
});

//GUARANTY ROUTE
app.get("/guaranty", function(req, res){
	res.render("guaranty");
});

//SUPPLIERS ROUTE
app.get("/supplier", function(req, res){
	res.render("supplier");
});

//PAYMENT ROUTE
app.get("/payment", function(req, res){
	res.render("payment");
});

//EXPERIENCE ROUTE
app.get("/experience", function(req, res){
	res.render("experience");
});

//ABOUT ROUTE
app.get("/about", function(req, res){
	res.render("about");
});

//COUNT ROUTE to count price of a listed service 
app.get("/count", function(req, res){
	res.render("count");
});

//SHOWSERVISE ROUTE to show list of the services
app.get("/showservice", function(req, res){
	res.render("showservice");
});

//LIEFERANTEN
app.get("/supplier", function(req, res){
	res.render("supplier");
});


// listening port
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("THE demo app server has started");
});
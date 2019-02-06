var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        //photosforclass
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3492/3823130660_0509aa841f.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"}
    ];
    

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});
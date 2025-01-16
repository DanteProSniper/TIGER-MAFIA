const express = require("express");
require("pug");

const app = express();


app.listen(3400, _=>(console.log("http://localhost:3400")));
app.set("view engine", "pug");
app.use(express.urlencoded({extended:true}));


app.get("/", home);

let bands = [
    {id:3, name:"Ghost", genre:"Metal"},
    {id:5, name:"Daft Punk", genre:"Goofy goober"},
    {id:6, name:"Post Malone", genre:"Melodic rap"}
]

function home(req, res){

    res.render("home",{title:"HOME"});

}

app.get("/about", about);

function about(req, res){

    res.render("about",{title:"ABOUT"});

}

app.get("/bands", showBands);

function showBands(req, res){

    res.render("bands",{bands, title:"SUM BANDS"});

}

app.post("/bands", createBand);

function createBand(req, res){


    let band = req.body;
    band.id = "id_"+Date.now();
    bands.push(band);
    res.render("band",{band, title:"created"});

}
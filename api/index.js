const express = require("express");
const cors = require("cors"); 
const app = express();
const productos = require("./productos.json");
const dias = require("./dias.json");
const atributos =require("./atributos.json")
const clases =require("./clases.json")
const habilidades =require("./habilidades.json")
const razas =require("./razas.json")

app.use(cors()); 

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/productos", (req, res) => {
    res.json(productos);
    });
app.get("/dias", (req, res) => {
    res.json(dias);
    });
app.get("/atributos"),(req,res) => {
    res.json(atributos);
}   
app.get("/clases"),(req,res) => {
    res.json(clases);
}
app.get("/habilidades"),(req,res) => {
    res.json(habilidades);
}
app.get("/razas"),(req,res) => {
    res.json(razas);
}
app.listen(3002, () => console.log("Server ready on port 3000."));

module.exports = app;
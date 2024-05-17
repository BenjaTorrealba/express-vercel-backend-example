const express = require("express");
const cors = require("cors"); 
const app = express();
const productos = require("./productos.json");

app.use(cors()); 

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/productos", (req, res) => {
    res.json(productos);
    });


app.listen(3002, () => console.log("Server ready on port 3000."));

module.exports = app;
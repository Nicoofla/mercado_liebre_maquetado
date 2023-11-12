const express = require("express");
const app = express()
const PORT = 3030;
const path = require("path")


app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views", "home.html")))
app.get("/ayuda",(req,res) => res.sendFile(path.join(__dirname,"views", "ayuda.html")))
app.get("/creaTuCuenta",(req,res) => res.sendFile(path.join(__dirname,"views", "creaTuCuenta.html")))
app.get("/login",(req,res) => res.sendFile(path.join(__dirname,"views", "login.html")))
app.get("/misCompras",(req,res) => res.sendFile(path.join(__dirname,"views", "misCompras.html")))
app.get("/tiendasOficiales",(req,res) => res.sendFile(path.join(__dirname,"views", "tiendasOficiales.html")))
app.get("/vender",(req,res) => res.sendFile(path.join(__dirname,"views", "vender.html")))

app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`))
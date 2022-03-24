const http = require("http");
const https = require("https");

const express = require("express");
const app = express();

app.use((req, res)=>{
    return res.send("Escuchando...")
})

const serverHttp = http.createServer(app);
const serverHttps = http.createServer(app);

serverHttp.listen("3000", ()=>{console.log(serverHttp.address());});
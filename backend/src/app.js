"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 5000;
app.get("/", function (_req, res) {
    res.send("Olá mundo");
});
app.listen(PORT, function () {
    console.log("Servidor rodando na porta ".concat(PORT));
});

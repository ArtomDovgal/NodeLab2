require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req, res) => {
  console.log("Server 3001 sent response")
    res.send("Hello World!");
    res.end();
});

module.exports = app;
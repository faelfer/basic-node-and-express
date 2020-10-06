const express = require('express')
const app = express()
require('dotenv').config()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
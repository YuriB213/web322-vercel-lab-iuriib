/*
    Lab 2 – GitHub Vercel
    Name: Iurii Buzynnik
    Student #146530233
*/

const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Iurii Buzynnik WEB322 ${new Date().toISOString()}`);
});

app.listen(HTTP_PORT, () => {
    console.log(`Server is ${HTTP_PORT}`);
});
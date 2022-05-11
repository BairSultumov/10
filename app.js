const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const multer = require("multer")
const upload = multer();


app.get("/", function (request, response) {
    response.sendFile(__dirname+"/1/index.html");
});

app.post("/getData", upload.fields([]), (request, response) => {
    if (!request.body)
        return response.sendStatus(400);
    response.send(arr[request.body.data - 1]);
});

app.get("/getTable", (request, response) => {
    response.send(table);
});

app.listen(3000, function () {
    console.log("Сервер запущен. Порт 3000")
});

const express = require("express");

const app = express();

function color() {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

app.get(function (request, response, next) {
    let d = new Date().toLocaleTimeString
    console.log(`${d} : ${request.url}`)
    next();
});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html")
});

app.get("/data", function (request, response) {
    let str = ""
    let mas = request.query.mas
    for (let i = 0; i < mas.length; i++)
        str += "<p>" + mas[i] + "</p>"
    response.send(str)
});

app.get("*", function (request, response, next) {
    let size = Math.round(Math.random() * 15) + 5
    response.send(`<h1 style="font-size:${size}">Страница не найдена</h1>`)
});
app.listen(3000,()=>
    console.log("Сервер начал прослушивание на порту 3000 ULTRA HD MAX LED IPHONE XIAOMI REDMI PLUS MAXI дайте 100 рублей")
);
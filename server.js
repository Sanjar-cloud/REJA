console.log("web serverni boshlash Bismillah");
const express = require("express");
const app = express();
const http = require("http");

//1: kirish ga bogliq codlar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: sesion ga bogliq codlar

//3: view ga bogliq codlar
app.set("views", "views");
app.set("view engine","ejs");

//4: routing ga bogliq codlar
app.get("/hello", function (req, res){
    res.end("<h1>hello world by Sanjar</h1>");
});
app.get("/gift", function (req, res){
    res.end("<h1>siz sovgalar bolimidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`the server is running successfully pn port: ${PORT}`);
});


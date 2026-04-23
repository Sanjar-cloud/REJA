console.log("web serverni boshlash Bismillah");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");


let user;
fs.readFile("database/user.json","utf8",(err, data) =>{
   if(err) {
      console.log("ERROR:", err);
   } else {
      user = JSON.parse(data)
   }
});


//1: kirish ga bogliq codlar
app.use(express.static("public")); // bu barcha kirib kela yotgan request larga 
//ochiq bolishi uchun public deb set qildik
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: sesion ga bogliq codlar


//3: view ga bogliq codlar
app.set("views", "views"); // frondet uchun kerak boladigan file larni shu view 
// folder ichidan topsan degan buyruq
app.set("view engine","ejs"); // 

//4: routing ga bogliq codlar (frontend qismi)
app.post("/create-item", (req, res ) => {
   
});

app.get('/author',(req, res) => {
    res.render("author", {user: user});
});


app.get("/", function(req, res) {
   res.render("harid");
});





const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`the server is running successfully pn port: ${PORT}`);
});


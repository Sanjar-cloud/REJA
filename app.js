console.log("web serverni boshlash Bismillah");
const express = require("express");
const res = require("express/lib/response");
const app = express();



//mongodb chaqirish 
const db = require("./server").db();

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
   console.log(req.body);
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
      console.log(data.ops);
      res.json(data.ops[0]);
   }); 
   
});

// app.get('/author',(req, res) => {
//     res.render("author", {user: user});
// });


app.get("/", function(req, res) {
   db.collection("plans").find().toArray((err, data) => {
      if (err) {
            console.log(err);
            res.end("something went wrong");
      } else {
         console.log(data);
         res.render("Reja", {items: data});
      }
   });
});





module.exports = app;

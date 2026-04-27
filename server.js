
const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionStrin = "mongodb+srv://sanjarbekkarimov229_db_user:NLDfEIWgcQRL4QU5@cluster0.fg12pka.mongodb.net/Reja";        

mongodb.connect(connectionStrin, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,   
 }, (err, client ) => {
     if(err) console.log("ERROR on connection mongodb");
     else{
        console.log(" mongodb connection succeed")
        module.exports = client;

         const app = require("./app");
         const server = http.createServer(app);
         let PORT = 3000;
         server.listen(PORT, function() {
         console.log(`the server is running successfully pn port: ${PORT}, http://localhost:${PORT}`);
});



     }
 });






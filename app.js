const express = require("express");
const todoController = require("./controllers/todoController");
const app = express();

//view engine
app.set("view engine", "ejs");

//static files
app.use("/public", express.static("public"));

//fire controller
todoController(app);

//listen to port
app.listen(3001);
console.log("you are listening to a port 3001");

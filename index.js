
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.set("views" ,path.join(__dirname,"/views"));
let methodOverride= require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));


app.listen(port, ()=>{
    console.log("i am listing")
})


const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'p',
    password: 'ssz@one'
  });
  let q= "select * from tb3";

  connection.query(q, (err,result)=>{
console.log("done")
  })

app.get("/home/log", (req, res)=> {
    res.render("index.ejs")
 });








































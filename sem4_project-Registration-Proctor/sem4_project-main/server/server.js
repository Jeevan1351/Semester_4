//jshint esversion:6
const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Mani@mysql123",
    database: "proctordb",
});


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Make it ;)");
});

app.get("/studinformation", (req,res)=> {
     
      const sqlselect = "select * from Info" ;
      db.query(sqlselect, (err, result)=>{
        res.send(result);
        // console.log(result);
      });
});

app.get("/studinformation/:sem", (req,res)=> {
  // req.params.sem
  const sqlselect = `select * from Info where semester = "${req.params.sem}";` ;
  db.query(sqlselect, (err, result)=>{
    res.send(result);
    // console.log(result);
  });
});

app.listen(8000,() =>{
    
    console.log("server is up and running");
}); 
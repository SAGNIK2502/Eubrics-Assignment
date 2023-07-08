import express from "express"
import cors from "cors"
import mongoose, { Mongoose } from "mongoose"
var express = require('express');
var router = express.Router();
const app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/buttonDB',{
  useNewUrlParser:true
  useUnifiedTopology: true
},()=>{
  console.log("DB connected")
})
app.post("/Navbar",(req,res)=>{
  res.send("my api")
})
app.listen(9002,()=>{
  console.log("port 9002")
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const userSchema = new mongoose.Schema({
  work: String
})
module.exports = router;

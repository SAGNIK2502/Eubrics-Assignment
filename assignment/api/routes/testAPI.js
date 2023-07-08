var express =require("express");
var router = express.Router();
router.get("/Navbar",function(req,res,next){
res.send("API is good");
});
module.exports=router;
var express = require('express');
var router = express.Router();

/** require users.js file */

const userModel = require('./users');








/* GET home page. */
router.get('/' , (req , res)=>{
  req.session.ban = true
  res.render('index')
})

router.get("/checkban" , function(req , res){
  if(req.session.ban === true){
  res.send(" You are Banned ")
  }
})

router.get("/removeban" , function(req ,res){
  req.session.destroy( function (req , res){
    req.session.destroy(function(err){
      console.log(err);
      res.send(" Ban Removed ")
    })
  })
})

/*

// Create route 

router.get('/create' , async (req , res) => {
  const createUser = await userModel.create({
                        username : "mdazaz@gmail.com",
                        name : "Md Azaz",
                        age : 21
                    })
  res.send(createUser)
})

// Find All User 

router.get('/alluser' , async (req , res) => {
  const alluser = await userModel.find()
  res.send(alluser)
})


// Find One User 

router.get('/oneUser' , async (req , res) => {
  const oneUser = await userModel.findOne({name : "Md Azaz"})
  res.send(oneUser)
})

// Delete User  

router.get('/delete' , async (req , res) => {
  const deleteUser = await userModel.findOneAndDelete({name : "Md Azaz"})
  res.send(deleteUser)
})

*/

 

module.exports = router;

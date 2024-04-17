// const express = require('express');
// const router = express.Router();
// const users = require("../Model/user");



// router.use(express.json());



// //create Signup route
// router.post('/',async(req,res)=>{
//     try {
//         const data = req.body;
//         let newUser = await users(data).save();
//         console.log(newUser);
//         res.status(200).send({message:"Data added"})
        
//     } catch (error) {
//         console.log(error)
        
//     }
//  })


//  // route for login
//  router.post('/login',async(req,res)=>{
//     let email = (req.body);
//     let password=req.body.password;

//     const user = await users.findOne({email:email});
//     if(!user){
//         res.json({message:"User not found"});
//     }
//     try {
//         if(user.password== password){
            
           
//              res.json({message:"Login successful",user})
//         }
//         else{
//             res.json({message:"Login Failed"})
//         }
//     } catch (error) {
//         console.log(error)
//     }

//  })






//  module.exports = router;









const express = require('express');
const router = express.Router();
const users = require("../Model/user");



router.use(express.json());



//create Signup route
router.post('/',async(req,res)=>{
    try {
        const data = req.body;
        let newUser = await users(data).save();
        console.log(newUser);
        res.status(200).send({message:"Data added"})
        
    } catch (error) {
        console.log(error)
        
    }
 })


 // route for login
 router.post('/login',async(req,res)=>{
    let email = (req.body);
    let password=req.body.password;

    const user = await users.findOne({email:email});
    if(!user){
        res.json({message:"User not found"});
    }
    try {
        if(user.password== password){
            
           
             res.json({message:"Login successful",user})
        }
        else{
            res.json({message:"Login Failed"})
        }
    } catch (error) {
        console.log(error)
    }

 })






module.exports = router;

   


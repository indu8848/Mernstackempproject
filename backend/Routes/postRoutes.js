const express = require("express");
const router = express.Router();
const posts = require("../Model/post");

router.use(express.json());

  //ADD/POST
router.post('/add',async (req,res)=>{
  try {
    const post = req.body;
    const data = await posts(post).save();
    res.status(200).send({message:"Employee added"})
    console.log(data)
  } catch (error) {
    console.log(error)
    
  }
})

//READ - View Employee (All Employees)
router.get('/view', async (req, res) => {
  try {
    const allPosts = await posts.find();
    res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});



  //  DELETE - Delete Employee by Name
 router.delete('/delete/:name', async (req, res) => {
    try {
      const { name } = req.params;
      await posts.findOneAndDelete({ name: name });
      res.status(200).send({ message: "Employee deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
  });
  
  



  router.put('/update/:name', async (req, res) => {
    try {
      const { name } = req.params;
      const updatedPost = await posts.findOneAndUpdate({ name: name }, req.body, { new: true });
      res.status(200).json(updatedPost);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
  });
  



module.exports=router





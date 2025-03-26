const express =require("express");

const User =require('../model/User');

const router =express.Router();

router.get("/getAll",async (req,res)=>{
    try {
        const users =await User.find();
        res.status(200).json(users);
    }catch (err){
        res.status(500).json({ error: err.message });
    }
});

router.post("/saveUser", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = new User({ name, email, age });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/:email",async (req,res) =>{
    try {
        const user =await User.findOne({email: req.params.email});
        if (!user){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
    }catch (err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router;
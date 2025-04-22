const user = require('../models/models.db.js');

const Usercreate = async(req,res) => {
    const newUser = new user({
        name: req.body.name,
        age: req.body.age
    });
    try{
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    }catch(error){
        return res.status(400).json({message:error.message});
    }
};

//functionality for the show user list
const UserList = async(req,res) => {
    try{
        const users = await user.find();
        res.status(200).json(users);
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
        console.log(err);
    }
};

//functionality to update the user list
const Userupdate = async(req,res) => {
    try{
        const result = await user.findOneAndUpdate({_id:req.params.id},
            {
                name: req.body.name,
                age: req.body.age,
            },
            {
                new: true,
            });
            res.status(200).json(result);
        }catch(error)
        {
            res.status(500).json({message:error.message});
        }
};

module.exports = { Usercreate, UserList, Userupdate };

        
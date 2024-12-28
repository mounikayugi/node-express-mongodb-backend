const Users = require("../models/user.model")

//get the all user(get api)
const getUsers = async (req,res) =>{
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};

//get one user id (id )
const getUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await Users.findById(id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

//add a user data
const createUser = async (req,res)=>{
    try{
        const userdata = await Users.create(req.body);
        res.status(200).json(userdata);
   }
   catch(error){
         res.status(500).json({message:error.message});
   }
};

//update user data
const updateUser = async (req,res)=>{
    try {
       const {id} = req.params;

       const user = await Users.findByIdAndUpdate(id, req.body);

       if(!user){
         return res.status(404).json({message: "User data not found"})
       }
       const updatedUser = await Users.findById(id);
       res.status(200).json(updatedUser);
    }
    catch(error){
          res.status(500).json({message:error.message});
    }
};

//delete user data
const deleteUser = async(req,res) =>
    {
        try {
            const {id} = req.params;
            const user = await Users.findByIdAndDelete(id);

            if(!user) {
               return res.status(404).json({message:"User data not found"});
            }
            res.status(200).json({message:"User deleted successfully"})
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    };

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
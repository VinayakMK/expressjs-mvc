const User = require("../models/userModel");

exports.userRegister = async (req,res)=>{
   
    try {

        const user = await User.create(req.body);

        if(user){
            res.status(201).json({
                success:true,
                message:"Signup form submitted",
                user,
            })
        }

    } catch (error) {
        res.status(201).json({
            success:false,
            message: error.message,
        });
    }

    
}

exports.loginUser = (req,res) =>{

    res.status(200).send({
        success:true,
        message:"Login done successfully"
    })
}
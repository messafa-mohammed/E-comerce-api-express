const {validationResult } = require( "express-validator");
const bcrypt = require('bcrypt');
const randomstring = require('randomstring')
const User = require( "../models/userModel");

const createUser = async(req,res)=>{
    try{
        const errors = validationResult(req)
       
        if(!errors){
            return res.status(200).json({
                success: false,
                msg:'Errors',
                errors:errors.array()
            });
        }
         
        const {name, email} = req.body;
        
        const isExists = await  User.findOne({email});
        
        if (isExists) {
            return res.status(409).json({
                success:false,
                msg:"Email already exists"
            })
        }
        
        const password = randomstring.generate(6);
        const hashPassword = await bcrypt.hash(password,10); 
       
        var obj = {
            name,
            email,
            password : hashPassword
        };

        if(req.body.role && req.body.role == 1){
            return res.status(400).json({
                success:false,
                msg:"You don't have permission to add admin user."
            })
        }else if(req.body.role){
            obj.role=req.body.role;
        }

        const user = new User(obj);
        const userData = await user.save();
        console.log(password);

        
        
        return res.status(200).json({
            success:true,
            msg:"user created successfully",
            data:userData
        })


    }catch(error){
        return res.status(400).json({
            reccess:false,
            msg: error.message
        });
    }
}

module.exports = {
    createUser,
}
const {validationResult } = require('express-validator');

const Category = require('../models/categoryModel')

const createPost = async(req,res)=>{
    try{


    }catch(error){
        return res.status(400).json({
            success: false,
            msg : error.message
        })
    }
}
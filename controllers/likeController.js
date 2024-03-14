const {validationResult} = require('express-validator')
const Like = require('../models/likeModel')

const postLike = async(req , res)=>{
    try{

        const errors = validationResult(req);

        if(!errors){
            return res.state(400).json({
                success:false,
                message:"Validation Error",
                errors: errors.array()
            });
        }

        const {user_id , post_id } = req.body;
        const isLiked = await Like.findOne( { user_id,post_id } )
        if(isLiked){
            return res.status(201).json({
                success : true,  
                data : "Already Liked"  
              })
        }
        const like = new Like({
            user_id,
            post_id
        })

        const likeDeda = await like.save();

        res.status(201).json({
            success : true, 
            msg: 'Post Liked Successfully',  
            data : likeDeda
          })

    }catch(error){
        res.this.state(400).json({
            success:false,
            message: error.message
        })
    }


}

module.exports= {
    postLike,
};
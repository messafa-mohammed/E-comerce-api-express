const mongoose = require('mongoose')
const commentSchema = new  mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref:'User' ,
         required:true 
    },
    post_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref:'Post' ,
         required:true 
    },
    comment:{
        type : String,
        required:true
    }

});

module.exports= mongoose.model("Comment",commentSchema);
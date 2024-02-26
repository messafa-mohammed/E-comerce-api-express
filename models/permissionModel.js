const mongoose = require('mongoose')
const permissionSchema = new  mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref:'User' ,
         required:true 
    },
    permission:[{
        
    }
    ]
});

module.exports= mongoose.model("Permission",permissionSchema);
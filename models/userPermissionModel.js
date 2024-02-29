const mongoose = require('mongoose')
const userPermissionSchema = new  mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref:'User' ,
         required:true 
    },
    permission:[{
        promisson_name: String,
        permission_value: [Number]  // 0-> create  ,  1-> read  ,  2-> edit  ,  3->  delete.
    }
    ]
});

module.exports= mongoose.model("UserPermission",userPermissionSchema);
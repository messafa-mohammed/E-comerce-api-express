
const onlyAdminAccess = async(req , res , next)=>{
    try{
        // console.log(req.user.role)
        if(req.user.role != 1){ //not admin
            return res.status(400).json({
                seccess: false,
                msg: `You haven't permission to access this route !!`
            })
        }
    }catch(error){
        return res.status(400).json({
            seccess: false,
            msg: `Somethig went wrong!!`
        })
    };
    return next();
}

module.exports = {
    onlyAdminAccess
};
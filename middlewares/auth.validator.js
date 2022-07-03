const validateAuth = (req,res,next) => {
if(!req.body.email || ! req.body.password){
    return res.status(400).json({
        message:'invalid arguments',
        sucess:false,
        data:{}
        
    });
 }
 next();

}

module.exports = {
 validateAuth
}
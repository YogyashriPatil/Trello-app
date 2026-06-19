import jwt from "jsonwebtoken";
function authMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,"secret");

    const userId = decoded.id;
    if(userId){
        req.userId;
        next();
    }
    else{
        res.status(401).json({
            message:"unauthorized"
        })
    }
}
module.exports={authMiddleware}
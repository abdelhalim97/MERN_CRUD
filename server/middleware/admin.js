var jwt = require('jsonwebtoken');

var admin =(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    decodedData=jwt.verify(token,process.env.PRIVATE_KEY)
    if(decodedData.role !=='ADMIN') return res.status(401).json({message:'you are not admin'})
    next()
}
module.exports = admin
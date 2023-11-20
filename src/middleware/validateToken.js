const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../models/config');

const authRequired = (req, res, next ) => {
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({messagge:'No  hay token'});

    }

    jwt.verify(token,TOKEN_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({messagge:'Token incorrecto'});
        }else{
            req.user = decoded;
        }
    })
    next();
}

module.exports = {
    authRequired
}
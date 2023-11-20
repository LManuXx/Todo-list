const bcrypt = require('bcryptjs');
const {createAccessToken} = require('../libs/jwt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../models/config');

exports.signup = async ( req, res) => {
    try{
        const {username, password} = req.body;

        const existingUser = await User.findOne({username});

        if(existingUser){
            return res.status(400).json({
                message:'El usuario ya existe'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username, 
            password: hashedPassword
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id:userSaved._id});
        res.cookie('token', token);
        res.json({
            username: userSaved.username
        })

    }catch(error){
        res.status(500).json({
            message:'Error en el servidor'
        });

        console.log(error);
    }
}

exports.login = async(req, res ) => {
    try{

        const {username, password} = req.body;
        console.log('pitoso')

        const user = await User.findOne({username});

        if(!user){
            return res.status(404).json({
                message:'Contraseña o usuario incorrecto'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if(!isPasswordValid){
            return res.status(401).json({
                message:'Contraseña o usuario incorrecto'
            });
        }

        const token = await createAccessToken({id: user._id, username:user.username});
        res.cookie('token', token);
        res.json({
            username: user.username
        })

    }catch(error) {
        console.log(error);
        res.status(500).json({message: 'Error en el servidor'});
    }

}

exports.logout = (req, res ) => {
    res.cookie('token', '', { expires: new Date(0) });
    return res.sendStatus(204);
}



exports.profile = async(req, res) => {
    const userFound = await User.findById(req.user.id);
    if(!userFound){
        return res.status(400).json({
            messagge: 'Usuario no encontrado'
        });
    }

    return res.json({
        id:userFound._id,
        username: userFound.username
    })


}


exports.verify = async (req, res) => {

    const {token} = req.cookies;
    if(!token){
        return res.status(400).json({
            message: 'no hay token',
        })
    }

    jwt.verify(token, TOKEN_SECRET, async(err, user)=>{
        if(err){
            return res.status(400).json({
                message: 'no hay token'
            })
        }
        const userFound = await User.findById(user.id);
        
        return res.json({
            id:userFound._id,
            username: userFound._id
        })

    });


}

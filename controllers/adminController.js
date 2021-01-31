const path = require('path');
const bcrypt = require('bcrypt');
const upload=require("../routes/administrador")
const multer=require("multer")
const {getAdmins,setAdmins} = require(path.join('..','data','admins'));

const Admins = getAdmins()


module.exports = {
    register : (req,res) =>{
        res.render('register')
    },
   profile:(req,res,next)=>{
    const {nombre, apellido,email,contraseña}=req.body
const avatar=req.files[0].filename
   const passEncriptada=bcrypt.hashSync(contraseña,10)
const newAdmin = {
        nombre, apellido,avatar,email,passEncriptada
    }
    Admins.push(newAdmin);

        setAdmins(Admins);

    
    res.render('profile',{
        Admins
    })


}
}
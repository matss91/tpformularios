const path = require('path');
const bcrypt = require('bcrypt');


const {getAdmins,setAdmins} = require(path.join('..','data','admins'));

const Admins = getAdmins()


module.exports = {
    register : (req,res) =>{
        res.render('register')
    },
   profile:(req,res,next)=>{
    const {nombre, apellido,email}=req.body
 
    const newAdmin = {
        nombre, apellido,email
    }
    Admins.push(newAdmin);

        setAdmins(Admins);
    
    
    res.render('profile',{
        Admins
    })


}
}
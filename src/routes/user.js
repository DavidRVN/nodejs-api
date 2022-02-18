const  express = require ("express");
const userSchema = require('../models/user');

const router = express.Router();

//Crear usuarios

router.post('/users', (req,res)=>{
    const user = userSchema(req.body);
    user.save()
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message: error}));
});


// Obtener Usuarios

router.get('/users', (req,res)=>{
   userSchema
   .find()
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message: error}));
});


router.get('/users/:id', (req,res)=>{
    const {id} = req.params;
    userSchema
    .findById(id)
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}));
 });
 

// Actualizar ususarios

router.put('/users/:id', (req,res)=>{
    const {id} = req.params;
    const {nombre, 
        apellido,tipoDoc,docIdentidad,correoElectronico,
        celular,fechaNacimiento,archivo} = req.body;
    userSchema
    .updateOne({_id: id},{$set:{nombre, 
        apellido,tipoDoc,docIdentidad,correoElectronico,
        celular,fechaNacimiento,archivo}})
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}));
 });


 // Eliminar Usuarios

 router.delete('/users/:id', (req,res)=>{
    const {id} = req.params;

    userSchema
        .remove({_id:id})
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}));
 });


module.exports = router;

 
const mongoose  =  require('mongoose');

const userSchema = mongoose.Schema({
    nombre:{
        type:String,
        require: true
    },
    apellido:{
        type:String,
        require: true
    },
    tipoDoc:{
        type:String,
        require: true
    },
    docIdentidad:{
        type:Number,
        require: true
    },
    correoElectronico:{
        type:String,
        require: true
    },
    celular:{
        type:String,
        require: true
    },
    fechaNacimiento:{
        type:String,
        require: true
    }
    ,
    archivo:{
        type:String,
        require: true 
    }
});

module.exports = mongoose.model('user',userSchema);
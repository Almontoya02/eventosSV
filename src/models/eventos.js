
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventosSchema = new Schema({
    "idEvento": Number,
    "nombre": String,
    "descripcion": String,
    "fecha": String,
    "lugar": String,
    "asistentes": [{
            "cedula": String,
            "nombre": String,
            "correo": String,
            "telefono": String,
            "tipo": String
        }
    ],
    "actividades": [{
            "id": Number,
            "nombre": String,
            "descripcion": String,
            "duracion": Number
        }
    ]
    
});

module.exports = mongoose.model('eventos',EventosSchema);
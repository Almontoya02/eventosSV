const express = require('express');
const router = express.Router();


const eventosDAO = require('../models/eventosDAO.js');
var daoEventos = new eventosDAO();

router.get('/eventos', function (req,res) {
    var data = daoEventos.getEventos();
    res.json(data);
});

router.post('/eventos', function (req,res) {
    var asistentes = [];
    var actividades = [];
    var eventosJSON = { 
        "idEvento":"",
        "nombre":"",
        "descripcion":"",
        "fecha":"",
        "lugar":"",
        "asistentes":"",
        "actividades":""
    };

    var idEvento = req.body.idEvento;
    var nombre = req.body.nombre;
    var descripcion = req.body.descripcion;
    var fecha = req.body.fecha;
    var lugar = req.body.lugar;

    var asistentesAux = req.body.asistentes.split(',');
    var actividadesAux = req.body.actividades.split(',');

    for (var i = 0; i < asistentesAux.length; i++){
        var asistentesJSON = {
            "id":""
        }
    
        asistentesJSON['id'] = asistentesAux[i];
        asistentes.push(asistentesJSON);
    }
    
    for (var i = 0; i < actividadesAux.length; i++){
        var actividadesJSON = {
            "id":""
        }
    
        actividadesJSON['id'] = actividadesAux[i];
        actividades.push(actividadesJSON);
    }

    eventosJSON['idEvento'] = idEvento;
    eventosJSON['nombre'] = nombre;
    eventosJSON['descripcion'] = descripcion;
    eventosJSON['fecha'] = fecha;
    eventosJSON['lugar'] = lugar;
    eventosJSON['asistentes'] = asistentes;
    eventosJSON['actividades'] = actividades;

    res.json(daoEventos.postEventos(eventosJSON));  
});

//Encontrar un evento por su ID
router.get('/evento/:id', (req, res) => {
    let id = req.params.id
    let eventoId = daoEventos.getEventoId(id)

    return res.status(200).send(eventoId.message)
})

router.put('/evento/:id', (req, res) => {
    let id = req.params.id
    let nombreB = req.body.nombre
    let descripcionB = req.body.descripcion
    let fechaB = req.body.fecha
    let lugarB = req.body.lugar

    console.log(nombreB)

    let actualizarEvento = daoEventos.putEventoId(id, nombreB, descripcionB, fechaB, lugarB)

    return res.status(200).send(actualizarEvento.message)
})

router.delete('/evento/:id', (req, res) => {
    let id = req.params.id
    let eliminarEvento = daoEventos.deleteEventoId(id)

    return res.status(200).send(eliminarEvento.message)
})

module.exports= router;

const express = require('express');
const router = express.Router();

const eventosDAO = require('../models/eventosDAO.js');
var daoEventos = new eventosDAO();

router.get('/', function (req,res) {
    var data = daoEventos.getEventos();
    res.json(data);
});

router.post('/add', function (req,res) {
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
            "nombre":""
        }
    
        asistentesJSON['nombre'] = asistentesAux[i];
        asistentes.push(asistentesJSON);
    }
    
    for (var i = 0; i < actividadesAux.length; i++){
        var actividadesJSON = {
            "nombre":""
        }
    
        actividadesJSON['nombre'] = actividadesAux[i];
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

module.exports= router;

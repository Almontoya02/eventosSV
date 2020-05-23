const express = require('express');
const router = express.Router();

const eventosDAO = require('../models/eventosDAO.js');
var daoEventos = new eventosDAO();

router.get('/', function (req,res) {
    var data = daoEventos.getEventos();
    console.log(data);
    res.send("holi soy el get de eventos");
   // res.send(data);

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

    daoEventos.postEventos(eventosJSON);
    console.log(eventosJSON);
    res.send("holi soy el post de eventos");
});

module.exports= router;

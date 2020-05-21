const express = require('express');
const router = express.Router();

const evento = require('../models/eventos');

router.get('/eventos', async (req,res) => {

    const eventos = await evento.find();
    console.log(eventos);

});

router.post('/add',async (req,res) =>{
    const event = new evento(req.body);
    await event.save();
    res.send('ok');
});

module.exports= router;

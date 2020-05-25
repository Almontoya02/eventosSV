const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


//connecting to db
mongoose.connect('mongodb://localhost/eventos')
    .then(db=> console.log('DB connected'))
    .catch(err => console.log(err));
//importing routes
const indexRoutes = require('./routes/index.js');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname+'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //alejo lo tenia el false. prueba cambiando a true
//app.use(express.json()); // probar

//routes
app.use('/', indexRoutes);
//starting the server
app.listen(app.get('port'), ()=>{
    console.log('corriendo en puerto '+app.get('port'));
});

const data = require('../models/eventosData.json');

class eventosDAO {
    constructor(){
        console.log("servicio eventos ejecutandose");
        }
}

getEventos(){
    return data;
}

postEventos(evento){
    try{
        data.push(evento);
        return this.getEventos()
    } 
    catch (error){
        return error
    } 
}

module.exports = eventosDao;
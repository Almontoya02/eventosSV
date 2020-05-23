const data = require('./eventosData.json');

class eventosDAO {
    constructor() {
        console.log("servicio Eventos ejecutandose");
    }

    getEventos() { 
         data;
    }

    postEventos(evento){
        try{
            data.push(evento);
            return this.getEventos();
        } 
        catch (error){
            return error;
        }
    } 
}

module.exports = eventosDAO;

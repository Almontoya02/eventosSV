const data = require('./eventosData.json');

class eventosDAO {
    constructor() {
        console.log("servicio Eventos ejecutandose");
    }

    getEventos() {
       return data;
    }

    postEventos(evento){
        try{
            data.push(evento);
            return this.getEventos();
        } catch (error){
            return error;
        }
    }

    putEventoId(id, nombreB, descripcion, fecha, lugar){
        let evento = this.getEventoId(id)
        console.log(evento.message.nombre)
        evento.message.nombre = nombreB
        evento.message.descripcion = descripcion
        evento.message.fecha = fecha
        evento.message.lugar = lugar

        return {
            message: evento
        }
    }

    buscarEvento(id){
        let eventosJSON = this.getEventos()
        let encontrado = false
        let posicion = 0

        for(let i = 0; i < eventosJSON.length; i++){
            if(eventosJSON[i].idEvento == id){
                encontrado = true
                posicion = i
            }else{
                encontrado = false
            }
        }

        if(encontrado) {
            return {
                message: posicion
            }
        }else{
            return {
                message: "No encontrado"
            }
        }
    }

    getEventoId(id){
        let eventos = this.getEventos()
        let bEvento = this.buscarEvento(id)

        if(bEvento.message != "No encontra"){
            return {
                message: eventos[bEvento.message]
            }
        }else{
            return {
                message: bEvento.message
            }
        }
    }

    deleteEventoId(id){
        let evento = this.getEventoId(id)
        console.log(evento.message)
        if(evento.message != "No encontra"){
            delete evento.message
            return {
                message: true
            }
        }else{
            return {
                message:false
            }
        }
    }
}

module.exports = eventosDAO;

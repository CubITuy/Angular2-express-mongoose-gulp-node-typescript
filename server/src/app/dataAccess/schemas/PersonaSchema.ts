/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import DataAccess = require('../DataAccess');
import IPersonaModel = require("./../../model/interfaces/PersonaModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class PersonaSchema {

    static get schema() {
        var schema = mongoose.Schema({
            ci: {
                type: String,
                required: true
            },
            primerNombre: {
                type: String,
                required: true
            },
            segundoNombre: {
                type: String,
                required: false
            },
            primerApellido: {
                type: String,
                required: true
            },
            segundoApellido: {
                type: String,
                required: false
            },
            observaciones: {
                type: String,
                required: true
            },
            fechaNacimiento: {
                type: Date,
                required: true
            },
            sexo: {
                type: String,
                required: true
            },
            fechaEmitido: {
                type: Date,
                required: true
            },
            fechaVencimiento: {
                type: Date,
                required: true
            },
            nacionalidad: {
                type: String,
                required: true
            }

        });

        return schema;
    }
}
var schema = mongooseConnection.model<IPersonaModel>("Personas", PersonaSchema.schema);
export = schema;
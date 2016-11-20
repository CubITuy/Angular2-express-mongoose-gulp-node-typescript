/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import mongoose = require("mongoose");

interface PersonaModel extends mongoose.Document {

    /*id: number;*/
    ci: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    observaciones: string;
    fechaNacimiento: Date;
    sexo: string;
    fechaEmitido: Date;
    fechaVencimiento: Date;
    nacionalidad: string;

}

export = PersonaModel;
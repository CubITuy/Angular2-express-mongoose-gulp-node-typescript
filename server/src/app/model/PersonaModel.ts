/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import IPersonaModel = require('./interfaces/PersonaModel');

class PersonaModel {

    private _personaModel: IPersonaModel;

    constructor(personaModel: IPersonaModel) {
        this._personaModel = personaModel;
    }

    get ci(): string {
        return this._personaModel.ci;
    }
    
    get primerNombre(): string {
        return this._personaModel.primerNombre;
    }

    get segundoNombre(): string {
        return this._personaModel.segundoNombre;
    }
    
    get primerApellido(): string {
        return this._personaModel.primerApellido;
    }

    get segundoApellido(): string {
        return this._personaModel.segundoApellido;
    }

    get observaciones(): string {
        return this._personaModel.observaciones;
    }

    get fechaNacimiento(): Date {
        return this._personaModel.fechaNacimiento;
    }

    get sexo(): string {
        return this._personaModel.sexo;
    }
    
    get fechaEmitido(): Date {
        return this._personaModel.fechaEmitido;
    }

    get fechaVencimiento(): Date {
        return this._personaModel.fechaEmitido;
    }

    get nacionalidad(): string {
        return this._personaModel.nacionalidad;
    }
    
}
Object.seal(PersonaModel);
export = PersonaModel;
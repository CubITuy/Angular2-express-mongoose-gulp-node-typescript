/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import IPersonaModel = require('./interfaces/PersonaModel');

class PersonaModel {

    private _personaModel: IPersonaModel;

    constructor(personaModel: IPersonaModel) {
        this._personaModel = personaModel;
    }
/*
    get id(): number {
        return this._personaModel.id;
    }
*/
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
    
    /*
    set id(id: string): void {
        this._personaModel.id = id;
    }

    set ci(ci: string): void {
        this._personaModel.ci = ci;
    }

	set primerNombre(primerNombre: string): void {
        this._personaModel.primerNombre = primerNombre;
    }
    
    set segundoNombre(segundoNombre): void {
        this._personaModel.segundoNombre = segundoNombre;
    }

    set primerApellido(primerApellido: string): void {
        this._personaModel.primerApellido = primerApellido;
    }

    set segundoApellido(segundoApellido: string): void {
        this._personaModel.segundoApellido = segundoApellido;
    }

    set observaciones(observaciones: string): void {
        this._personaModel.observaciones = observaciones;
    }

    set fechaNacimiento(fechaNacimiento: Date): void {
        this._personaModel.fechaNacimiento = fechaNacimiento;
    }

    set sexo(sexo: string): void {
        this._personaModel.sexo = sexo;
    }

    set fechaEmitido(fechaEmitido: Date): void {
        this._personaModel.fechaEmitido = fechaEmitido;
    }

    set fechaVencimiento(fechaVencimiento: Date): void {
        this._personaModel.fechaVencimiento = fechaVencimiento;
    }

    set nacionalidad(nacionalidad: string): void {
        this._personaModel.nacionalidad = nacionalidad;
    }*/
    
}
Object.seal(PersonaModel);
export = PersonaModel;
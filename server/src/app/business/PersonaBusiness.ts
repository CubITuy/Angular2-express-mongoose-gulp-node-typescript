/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import PersonaRepository = require("./../repository/PersonaRepository");
import IPersonaBusiness = require("./interfaces/PersonaBusiness");
import IPersonaModel = require("./../model/interfaces/PersonaModel");
import PersonaModel = require("./../model/PersonaModel");


class PersonaBusiness implements IPersonaBusiness {
    private _personaRepository: PersonaRepository;

    constructor() {
        this._personaRepository = new PersonaRepository();
    }

    create(item: IPersonaModel, callback: (error: any, result: any) => void) {
        this._personaRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._personaRepository.retrieve(callback);
    }

    update(_id: string, item: IPersonaModel, callback: (error: any, result: any) => void) {

        this._personaRepository.findById(_id, (err, res) => {
            if (err) callback(err, res);

            else
                this._personaRepository.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._personaRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IPersonaModel) => void) {
        this._personaRepository.findById(_id, callback);
    }

}


Object.seal(PersonaBusiness);
export = PersonaBusiness;
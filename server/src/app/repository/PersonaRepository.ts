/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import PersonaModel = require("./../model/PersonaModel");
import IPersonaModel = require("./../model/interfaces/PersonaModel");
import PersonaSchema = require("./../dataAccess/schemas/PersonaSchema");
import RepositoryBase = require("./BaseRepository");

class PersonaRepository extends RepositoryBase<IPersonaModel> {
    constructor() {
        super(PersonaSchema);
    }
}

Object.seal(PersonaRepository);
export = PersonaRepository;
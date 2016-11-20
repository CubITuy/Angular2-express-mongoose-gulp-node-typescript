/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IPersonaModel = require("./../../model/interfaces/PersonaModel");

interface PersonaBusiness extends BaseBusiness<IPersonaModel> {

}
export = PersonaBusiness;
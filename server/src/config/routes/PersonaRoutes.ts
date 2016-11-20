/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import express = require("express");
import PersonaController = require("./../../controllers/PersonaController");

var router = express.Router();
class PersonaRoutes {
    private _personaController: PersonaController;

    constructor() {
        this._personaController = new PersonaController();
    }
    get routes() {
        var controller = this._personaController;

        router.get("/personas", controller.retrieve);
        router.post("/personas", controller.create);
        router.put("/personas/:_id", controller.update);
        router.get("/personas/:_id", controller.findById);
        router.delete("/personas/:_id", controller.delete);

        return router;
    }


}

Object.seal(PersonaRoutes);
export = PersonaRoutes;
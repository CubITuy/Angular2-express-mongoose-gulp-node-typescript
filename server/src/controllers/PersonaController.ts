/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import express = require("express");
import PersonaBusiness = require("./../app/business/PersonaBusiness");
import IBaseController = require("./BaseController");
import IPersonaModel = require("./../app/model/interfaces/PersonaModel");

class PersonaController implements IBaseController <PersonaBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var persona: IPersonaModel = <IPersonaModel>req.body;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.create(persona, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var persona: IPersonaModel = <IPersonaModel>req.body;
            var _id: string = req.params._id;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.update(_id, persona, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var personaBusiness = new PersonaBusiness();
            personaBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
}
export = PersonaController;
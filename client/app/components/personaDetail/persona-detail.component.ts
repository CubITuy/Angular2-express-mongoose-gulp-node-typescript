/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "../../models/persona";
import { ActivatedRoute, Params } from '@angular/router';
import {PersonaService} from "../../services/persona.service";

@Component({
    selector: 'my-persona-detail',
    templateUrl: './app/components/personaDetail/persona-detail.component.html'
})

export class PersonaDetailComponent implements OnInit {
    @Input() persona: Persona;
    newPersona = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private personaService: PersonaService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newPersona = true;
                this.persona = new Persona();
            } else {
                this.newPersona = false;
                this.personaService.getPersona(id)
                    .then(persona => this.persona = persona);
            }
        });
    }

    save() {
        this.personaService
            .save(this.persona)
            .then(persona => {
                this.persona = persona; // saved persona, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}
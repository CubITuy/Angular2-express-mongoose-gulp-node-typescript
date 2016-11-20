/**
 * Created by Martín Sabatella on 19-11-2016.
 */
 
import {Component, OnInit} from '@angular/core';
import {PersonaService} from "../../services/persona.service";
import {Persona} from "../../models/persona";
import { Router } from '@angular/router';

@Component({
    selector: 'my-personas',
    templateUrl: './app/components/personas/personas.component.html'
})

export class PersonasComponent implements OnInit {

    personas: Persona[];
    selectedPersona: Persona;
    error: any;

    constructor(
        private router: Router,
        private personaService: PersonaService) { }
    getPersonas() {
        this.personaService.getPersonas().then(personas => this.personas = personas);
    }
    ngOnInit() {
        this.getPersonas();
    }
    onSelect(persona: Persona) { this.selectedPersona = persona; }

    gotoPersonaDetail() {
        this.router.navigate(['/personadetail', this.selectedPersona._id]);
    }

    addPersona() {
        this.selectedPersona = null;
        this.router.navigate(['/personadetail', 'new']);
    }

    deletePersona(persona: Persona, event: any) {
        event.stopPropagation();
        this.personaService
            .delete(persona)
            .then(res => {
                this.personas = this.personas.filter(h => h !== persona);
                if (this.selectedPersona === persona) { this.selectedPersona = null; }
            })
            .catch(error => this.error = error);
    }
}

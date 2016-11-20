/**
 * Created by Martín Sabatella on 19-11-2016.
 */
 
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

import {Persona} from "../../models/persona";
import {PersonaService} from "../../services/persona.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    personas: Persona[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService,
        private personaService: PersonaService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
            
        this.personaService.getPersonas()
            .then(personas => this.personas = personas);    
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }
    
    gotoPersonaDetail(persona: Persona) {
        let link = ['/personadetail', persona._id];
        this.router.navigate(link);
    }
}
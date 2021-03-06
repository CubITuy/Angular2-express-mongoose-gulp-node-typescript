import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';

import { PersonasComponent }      from './components/personas/personas.component';
import { PersonaDetailComponent }  from './components/personaDetail/persona-detail.component';

import { HeroService }  from './services/hero.service';
import { PersonaService }  from './services/persona.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    PersonasComponent,
    PersonaDetailComponent
  ],
  providers: [
    HeroService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

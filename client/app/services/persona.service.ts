/**
 * Created by Martín Sabatella on 19-11-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Persona} from "../models/persona";

@Injectable()
export class PersonaService {

    private personasUrl = 'api/personas';  // URL to web api

    constructor(private http: Http) { }

    getPersonas(): Promise<Persona[]> {
        return this.http.get(this.personasUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getPersona(id: string) {
        return this.http.get(this.personasUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(persona: Persona): Promise<Persona>  {
        if (persona._id) {
            return this.put(persona);
        }
        return this.post(persona);
    }

    private post(persona: Persona): Promise<Persona> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.personasUrl, JSON.stringify(persona), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(persona: Persona) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.personasUrl}/${persona._id}`;

        return this.http
            .put(url, JSON.stringify(persona), {headers: headers})
            .toPromise()
            .then(() => persona)
            .catch(this.handleError);
    }

    delete(persona: Persona) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.personasUrl}/${persona._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
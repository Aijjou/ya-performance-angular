import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../model/adresse';
import { Prospect } from '../model/prospect';
import { Simulation } from '../model/simulation';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  path = "http://localhost:8080";

  constructor(private http: HttpClient) { }
  public postSimulation(simulation: Simulation, id: number, prospect : Prospect, adresse : Adresse): Observable<Simulation> {
    console.log(adresse);
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };

    let prospectString = JSON.stringify(prospect);
    let adresse1 = JSON.stringify(adresse);
    console.log(adresse1);
    console.log(simulation);
    const options = {
      params : new HttpParams().set('prospect', prospectString).set('adresse', adresse1),
      httpOptions
    }
    return this.http.post<Simulation>(this.path + '/simulation/' + id + '/creation', simulation, options);
  }

}

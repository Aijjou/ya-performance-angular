import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Simulation } from '../model/simulation';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  path = "htpp://localhost:8080";

  constructor(private http: HttpClient) { }
  public postSimulation(prospect: Simulation, id: number): Observable<Simulation> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Simulation>(this.path + '/home/' + id + '/simulation', prospect, httpOptions);
  }

}

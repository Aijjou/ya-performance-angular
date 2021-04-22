import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prospect } from '../model/prospect';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  path = "htpps://localhost:8080";

  constructor(private http: HttpClient) { }
  public postFormulaire(prospect: Prospect, id: number): Observable<Prospect> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Prospect>(this.path + '/home/' + id + '/formulaire', prospect, httpOptions);
  }

}

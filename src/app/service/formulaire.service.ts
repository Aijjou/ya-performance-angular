import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Prospect } from '../model/prospect';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  path = 'http://localhost:8080';

  @Output()
  envoi = new EventEmitter();

  constructor(private http: HttpClient) { }


  envoiProspect(prospect: Prospect) {
    this.envoi.emit(prospect);
  }


  public postFormulaire(prospect: Prospect, id: number): Observable<Prospect> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Prospect>(this.path + '/prospect/' + id + '/formulaire', prospect, httpOptions);
  }






}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from '../model/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  path = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  public postDevis(devis: Devis): Observable<Devis> {
    console.log(devis);
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Devis>(this.path + '/devis', devis, httpOptions);
  }
}

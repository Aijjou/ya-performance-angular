import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProspectAppelDirect } from '../model/prospect-direct';


@Injectable({
  providedIn: 'root'
})
export class ProspectDirectService {
  path = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  public postProspectAppelDirect(prospectDirect: ProspectAppelDirect): Observable<ProspectAppelDirect> {
    console.log(prospectDirect);
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ProspectAppelDirect>(this.path + '/prospectappel', prospectDirect, httpOptions);
  }
}

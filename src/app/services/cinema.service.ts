import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinema } from '../models/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(`${environment.apiURL}/cinemas`)
  }

  /**
   * Appelle le back pour récupèrer un cinéma à partir de son identifiant passé en paramètre
   * @param id l'identifiant du cinéma
   * @returns le cinéma récupéré depuis le back end
   */
  getById(id : string): Observable<Cinema> {
    return this.httpClient.get<Cinema>(`${environment.apiURL}/cinemas/${id}`)
  }

  
}


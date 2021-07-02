import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seance } from '../models/seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private httpClient : HttpClient) { 
  }

  getSeanceByFilmId = (idFilm : string) => {
    return this.httpClient.get<Seance[]>(`${environment.apiURL}/seances/films/${idFilm}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getDistinctCinemaByID = (idCinema : string) => {
    return this.httpClient.get<Film[]>(`${environment.apiURL}/films/cinemas/${idCinema}`);
  }
}

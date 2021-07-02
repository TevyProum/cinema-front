import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';
import { CinemaService } from 'src/app/services/cinema.service';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

cinemas : Cinema[];

  constructor(private cinemaService : CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getAll().subscribe( (data) => {
     this.cinemas = data;
    })
  }

}

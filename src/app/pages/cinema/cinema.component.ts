import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  films : Film[];

  constructor(private filmService : FilmService,
    private activatedRoute : ActivatedRoute 
    ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(`Identifiant Cinema ${id}`);
    
    this.filmService.getDistinctCinemaByID(id).subscribe( (data) => {
     this.films = data;
    })
  }
}

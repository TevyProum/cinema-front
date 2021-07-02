import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seance } from 'src/app/models/seance';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  seances : Seance[];

  constructor(
    private seanceService : SeanceService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let idFilm = this.activatedRoute.snapshot.params.id;
    this.seanceService.getSeanceByFilmId(idFilm).subscribe((data) => {
      this.seances = data;
    })
  }

}

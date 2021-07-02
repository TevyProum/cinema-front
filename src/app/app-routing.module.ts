import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { SeancesComponent } from './pages/seances/seances.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "cinemas/:id", component: CinemaComponent},
  {path: "seances/:id", component: SeancesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

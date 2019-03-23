import { LocationsComponent } from './locations/locations.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/episodes', pathMatch: 'full'},
  { path: 'episodes', component: EpisodesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'locations', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

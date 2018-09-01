import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { FavoritesComponent } from '@app/favorites/favorites.component';
const routes: Routes = [
  Route.withShell([{ path: 'favorites', component: FavoritesComponent, data: { title: extract('Favorites') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FavoritesRoutingModule {}

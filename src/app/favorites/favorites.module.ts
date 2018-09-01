import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FavoritesComponent } from '@app/favorites/favorites.component';
import { FavoritesRoutingModule } from '@app/favorites/favorites-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, FavoritesRoutingModule],
  declarations: [FavoritesComponent],
})
export class FavoritesModule {}

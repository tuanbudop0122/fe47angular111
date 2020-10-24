import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [
    InteractionComponent,
    MoviesListComponent,
    MoviesItemComponent,
    MovieDetailComponent,
    AddMovieComponent,
  ],
  imports: [CommonModule],
  exports: [InteractionComponent],
})
export class InteractionModule {}

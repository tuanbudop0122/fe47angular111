import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild(MoviesListComponent) movieListComponent: MoviesListComponent;
  @ViewChild(MovieDetailComponent) movieDetailComponent: MovieDetailComponent;
  constructor() {}

  ngOnInit(): void {}
  handleAddMovie({ tenPhim, gia, hinhAnh }) {
    this.movieListComponent.movieList.push({ tenPhim, gia, hinhAnh });
  }
  hangleSelectMovie(movie: any) {
    this.movieDetailComponent.movieDetail = movie;
  }
}

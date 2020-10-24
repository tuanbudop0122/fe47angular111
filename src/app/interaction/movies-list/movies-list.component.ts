import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { MoviesItemComponent } from '../movies-item/movies-item.component';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movieList: any[] = [
    { tenPhim: '1', gia: 100, hinhAnh: 'assets/image/1.jpg', rating: 5 },
    { tenPhim: '2', gia: 200, hinhAnh: 'assets/image/2.jpg', rating: 5 },
    { tenPhim: '3', gia: 300, hinhAnh: 'assets/image/3.jpg', rating: 5 },
  ];
  @Output() selectMovie = new EventEmitter();
  @ViewChildren(MoviesItemComponent) movieItemComponent: QueryList<
    MoviesItemComponent
  >;
  constructor() {}

  ngOnInit(): void {}
  viewDetail(movie: any) {
    this.selectMovie.emit(movie);
    this.movieItemComponent.forEach((item: MoviesItemComponent) => {
      console.log(item.movie);
    });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss'],
})
export class MoviesItemComponent implements OnInit {
  @Input() movie;
  @Output() selectMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  viewDetail() {
    //kích hoạt và đẩy sự kiện selectMovie lên component cha
    this.selectMovie.emit(this.movie);
  }
}

// để đưa dữ liệu từ con => cha thì phải import Output và EventEmitter

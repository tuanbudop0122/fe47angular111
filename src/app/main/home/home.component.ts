import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/sevices/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] | null = null;
  loading: boolean = false;
  error: string = '';
  constructor(private movieService: MovieService) {}
  //Tương đương componentDidmount trong react
  ngOnInit(): void {
    // this.loading = true;
    // this.movieService.getMovieList().subscribe({
    //   next: result =>{
    //     this.movieList = result;
    //     this.loading = false
    //   },
    //   error: error => {console.log(error);
    //   this.loading = false;
    //   this.error = error.error;
    //   },

    //   complete : () => console.log("Get movie list success")
    // })
    //call API
    this.movieService.getMovieList().subscribe();
    //Subscribe data
    this.movieService.movies.subscribe({
      next: (result: any) => {
        this.movieList = result.data;
        this.loading = result.loading;
        this.error = result.error;
      },
    });
  }
}

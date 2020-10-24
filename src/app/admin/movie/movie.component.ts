import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/sevices/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  pageSize: number = 10;
  currentPage: number = 1;
  totalCount: number = 0;
  movieList: Movie[];

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.currentPage = parseInt(params.page) || 1;
        this.movieService
          .getMovieListPaging(this.currentPage, this.pageSize)
          .subscribe({
            next: (res: any) => {
              this.movieList = res.items;
              this.totalCount = res.totalCount;
              console.log(this.movieList);
            },
          });
      },
    });
  }
  changePage(pageEvent): void {
    this.router.navigate([], {
      queryParams: { page: pageEvent.pageIndex + 1 },
    });
  }
}

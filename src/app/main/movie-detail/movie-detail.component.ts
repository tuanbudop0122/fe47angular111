import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {MovieService} from "src/app/core/sevices/movie.service"
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService) { }
movieDetail:any | null = null 
loading:boolean = false
error:string = ''
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: params =>{
        console.log(params)
    this.loading = true
        this.movieService.getMovieDetail(params.id).subscribe({
          next: res =>{
            this.movieDetail = res;
            this.loading = false;
          },
          error: error =>{
            this.loading = false;
            this.error = error.error
          }
        })
      } 
    })
  }

}

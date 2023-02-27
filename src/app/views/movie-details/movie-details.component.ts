import { MovieDetails } from './../../models/main-models';
import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId!:Number;
  movieDetails!:MovieDetails;

  constructor(private service:SharedService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      this.movieId = id;
    });
  }

  ngOnInit(): void {
    this.service.getMovieDetailsById(this.movieId).subscribe( (data:any) =>{
      this.movieDetails = data;
    });

  }

}

import { MovieDetails } from './../../models/main-models';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  @Input() movieData!:MovieDetails;

  @Output() movieDataEmitter = new EventEmitter<MovieDetails>();

  imagesSmURL:String = this.service.imagesSmURL;
  constructor(private service:SharedService , private router : Router) { }

  routeToMovieDetails(id:Number){
    this.router.navigate(['/movie-details'], { queryParams: { id: JSON.stringify(id)}});
  }

  sendMovieData(val: MovieDetails) {
    this.movieDataEmitter.emit(val);
  }


  ngOnInit(): void {}

}

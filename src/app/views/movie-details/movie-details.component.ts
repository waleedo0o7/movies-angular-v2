import { MovieDetails } from './../../models/main-models';
import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: Number;
  movieDetails!: MovieDetails;

  imagesSmURL = this.service.imagesSmURL;
  imagesCoverURL = this.service.imagesCoverURL;

  movieVideos: any;

  movieTime: any = {
    hours: 0,
    minutes: 0,
  };

  constructor(
    private service: SharedService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      let id = params['id'];
      this.movieId = id;
    });
  }

  secureVideoUrl: SafeResourceUrl = '';

  ngOnInit(): void {
    this.service.getMovieDetailsById(this.movieId).subscribe((data: any) => {
      this.movieDetails = data;
      this.movieTime.hours = Math.floor(this.movieDetails.runtime / 60);
      this.movieTime.minutes = this.movieDetails.runtime % 60;
    });
    this.service.getMovieVideo(this.movieId).subscribe((data) => {
      this.movieVideos = data;
      this.secureVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.movieVideos.results[0].key}`
      );
      console.log('this.secureVideoUrl');
      console.log(this.secureVideoUrl);
    });
    window.scrollTo(0, 0);
  }
}

import { LightGallery } from 'lightgallery/lightgallery';
import { MovieDetails } from './../../models/main-models';
import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { BeforeSlideDetail, InitDetail } from 'lightgallery/lg-events';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieDetailsComponent implements OnInit {

  private lightGallery!: LightGallery;

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  onInit = (detail: InitDetail): void => {
    this.lightGallery = detail.instance;

  };

  movieId!: Number;
  movieDetails!: MovieDetails;

  imagesSmURL = this.service.imagesSmURL;
  imagesCoverURL = this.service.imagesCoverURL;

  movieVideos: any;

  movieTime: any = {
    hours: 0,
    minutes: 0,
  };

  movieImagesList: any =[];

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
    });

    this.service.getMovieImagesById(this.movieId).subscribe((data: any) => {
      for (let i = 0; i < data.backdrops.length; i++) {
        data.backdrops[
          i
        ].file_path = `${this.service.imagesLgURL}${data.backdrops[i].file_path}`;
      }
      this.movieImagesList = data.backdrops;
    });
    window.scrollTo(0, 0);
  }
}

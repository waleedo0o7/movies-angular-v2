import { MovieList, MovieDetails } from './../../models/main-models';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade,
} from 'swiper';
import { Router } from '@angular/router';
import { interval, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade,
]);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(
    private title: Title,
    private service: SharedService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  moviesTrendingList!: MovieList;
  moviesSliderList: MovieList = {
    results: [],
    total_results: 4,
  };

  getMoviesSliderList() {
    let ids = [414906, 507086, 337404, 505642, 536554, 631842, 315162];

    for (let i = 0; i < ids.length; i++) {
      this.service.getMovieDetailsById(ids[i]).subscribe((data: any) => {
        this.moviesSliderList.results.push(data);
      });
    }
  }

  imagesLgURL: string = this.service.imagesLgURL;

  onSwiper(swiper: any) {
    // console.log(swiper);
  }

  onSlideChange() {
    // console.log('slide change');
  }

  getAllTrendingMovies(pageNum: any) {
    this.service
      .getMoviesList(`${this.service.baseUrl}trending/movie/day`, pageNum)
      .subscribe((result: any) => {
        this.moviesTrendingList = result;
      });
  }

  routeToMovieDetails(param: MovieDetails) {
    this.router.navigate(['/movie-details'], { queryParams: { id: param.id } });
  }

  ngOnInit() {
    this.title.setTitle(`Home ${this.service.mainTitle}`);
    this.getAllTrendingMovies('1');

    this.getMoviesSliderList();
  }

  ngOnChanges() {}

  ngDoCheck() {}

  ngAfterContentInit() {}

  ngAfterContentChecked() {}

  ngAfterViewInit() {}

  ngAfterViewChecked() {}

  ngOnDestroy() {}
}

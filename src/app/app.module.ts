import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { MoviesListComponent } from './shared/movies-list/movies-list.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedService } from './shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './views/search-result/search-result.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { TopRatedMoviesComponent } from './views/top-rated-movies/top-rated-movies.component';
import { NowPlayingMoviesComponent } from './views/now-playing-movies/now-playing-movies.component';
import { PopularMoviesComponent } from './views/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './views/upcoming-movies/upcoming-movies.component';

import { SwiperModule } from "swiper/angular";

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SearchResultComponent,
    MovieCardComponent,
    TopRatedMoviesComponent,
    NowPlayingMoviesComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [SharedService , Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

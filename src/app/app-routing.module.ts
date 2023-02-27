import { UpcomingMoviesComponent } from './views/upcoming-movies/upcoming-movies.component';
import { PopularMoviesComponent } from './views/popular-movies/popular-movies.component';
import { NowPlayingMoviesComponent } from './views/now-playing-movies/now-playing-movies.component';
import { TopRatedMoviesComponent } from './views/top-rated-movies/top-rated-movies.component';
import { SearchResultComponent } from './views/search-result/search-result.component';
import { MoviesListComponent } from './shared/movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';

const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full'},
  { path : "home", component: HomepageComponent},
  { path : "movies", component : MoviesListComponent},
  { path : "top-rated-movies" , component : TopRatedMoviesComponent },
  { path : "now-playing-movies" , component : NowPlayingMoviesComponent },
  { path : "popular-movies" , component : PopularMoviesComponent },
  { path : "upcoming-movies" , component : UpcomingMoviesComponent },
  { path : 'movie-details' , component : MovieDetailsComponent},
  { path : 'search' , component : SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

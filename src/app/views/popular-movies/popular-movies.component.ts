import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/main-models';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  moviesPopularList!:MovieList;
  pageTitle = 'Popular Movies'

  getAllPopularMovies(pageNum:any){
    this.service.getMoviesList(`${this.service.baseUrl}movie/popular` , pageNum).subscribe( (result:any) => {
      this.moviesPopularList = result;
    })
  }

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getAllPopularMovies('1');
  }

}

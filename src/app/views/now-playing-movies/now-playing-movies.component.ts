import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/main-models';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit {

  moviesNowPlayingList!:MovieList;

  getAllNowPlayingMovies(){
    this.service.getMoviesList(`${this.service.baseUrl}movie/now_playing`).subscribe( (result:any) => {
      this.moviesNowPlayingList = result;
    })
  }

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getAllNowPlayingMovies();
  }

}

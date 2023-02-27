import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/main-models';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss'],
})
export class NowPlayingMoviesComponent implements OnInit {
  moviesNowPlayingList!: MovieList;
  pageTitle = 'Now Playing Movies';

  getAllNowPlayingMovies(pageNum:any) {
    this.service
      .getMoviesList(`${this.service.baseUrl}movie/now_playing` , pageNum)
      .subscribe((result: any) => {
        this.moviesNowPlayingList = result;
      });
  }

  constructor(private title:Title,private service: SharedService) {}

  ngOnInit(): void {
    this.getAllNowPlayingMovies('1');
    this.title.setTitle(`${this.pageTitle} ${this.service.mainTitle}`);
  }
}

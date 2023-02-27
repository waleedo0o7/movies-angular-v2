import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/main-models';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {

  moviesTopRatedList!: MovieList;

  getAllTopRatedMovies(pageNum:any) {
    this.service
      .getMoviesList(`${this.service.baseUrl}movie/top_rated` , pageNum)
      .subscribe((result: any) => {
        this.moviesTopRatedList = result;
      });
  }

  testPage(value: number) {
    alert(value);
  }

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.getAllTopRatedMovies("1");
  }
}

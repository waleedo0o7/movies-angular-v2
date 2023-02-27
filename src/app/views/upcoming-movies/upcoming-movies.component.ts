import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/main-models';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  moviesUpcomingList!:MovieList;

  constructor(private service: SharedService) {
  }

  getAllUpcomingMovies(){
    this.service.getMoviesList(`${this.service.baseUrl}movie/upcoming`).subscribe( (result:any) => {
      this.moviesUpcomingList = result;
    })
  }

  ngOnInit(): void {
    this.getAllUpcomingMovies();
  }

}

import { Title } from '@angular/platform-browser';
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
  pageTitle = 'Upcoming Movies'

  constructor(private title:Title,private service: SharedService) {
  }

  getAllUpcomingMovies(pageNum:any){
    this.service.getMoviesList(`${this.service.baseUrl}movie/upcoming` , pageNum).subscribe( (result:any) => {
      this.moviesUpcomingList = result;
    })
  }

  ngOnInit(): void {
    this.getAllUpcomingMovies('1');
    this.title.setTitle(`${this.pageTitle} ${this.service.mainTitle}`);
  }

}

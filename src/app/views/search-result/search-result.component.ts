import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieList } from './../../models/main-models';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

  searchedMoviesList!: MovieList;
  searchedWord!: string;

  constructor(
    private service: SharedService,
    private activatedRoute: ActivatedRoute,
    private title:Title
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchedWord = params['query'];
      this.getSearchedMoviesList('1');
    });
  }

  getSearchedMoviesList(pageNum:any) {
    this.service
      .getMoviesList(`${this.service.baseUrl}search/movie`, pageNum , this.searchedWord)
      .subscribe((result: any) => {
        this.searchedMoviesList = result;
      });
  }

  ngOnInit(): void {
    this.title.setTitle(`Results ${this.searchedWord}`)
  }
}

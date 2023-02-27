import { MovieList, MovieDetails } from '../../models/main-models';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

  @Input() moviesList!: MovieList;

  @Input() fullWidth: boolean = false;

  @Input() noGutters: boolean = false;

  @Input() colNum: number = 4;

  @Input() hasSidebar: boolean = false;

  @Input() paginationSetting = {
    totalItems : 0,
    itemsPerPage : 20,
    currentPage : 1,
  }

  @Output() paginationDataEmitter = new EventEmitter<number>();

  constructor(private service: SharedService, private router: Router) {}

  getPage(val:number) {
    if(val > 500 ){
      val = 500;
    }
    this.paginationDataEmitter.emit(val);
  }

  ngOnInit(): void {
  }

  routeToMovieDetails(param: MovieDetails) {
    this.router.navigate(['/movie-details'], { queryParams: { id: param.id } });
  }

  setColumnNumbers(val: number) {
    return `col-md-${val}`;
  }
}

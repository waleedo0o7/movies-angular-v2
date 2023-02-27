import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor(private http:HttpClient,private service:SharedService , private router:Router) { }

  ngOnInit(): void {}

  routeToSearchPage(searchedWord:string){
    this.router.navigate(['/search'], {queryParams : {query : searchedWord} } )
  }

  ngAfterViewInit() {
  }

}

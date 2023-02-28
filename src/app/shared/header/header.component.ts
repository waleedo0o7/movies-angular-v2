import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private service: SharedService,
    private router: Router
  ) {}

  @ViewChild('menuWrapper', { static: false }) menuWrapper!: ElementRef;
  @ViewChild('searchWrapper', { static: false }) searchWrapper!: ElementRef;
  @ViewChild('inputRef', { static: false }) inputRef!: ElementRef;

  ngOnInit(): void {}

  routeToSearchPage(searchedWord: string) {
    this.inputRef.nativeElement.value = ''
    this.router.navigate(['/search'], { queryParams: { query: searchedWord } });
  }

  keyDownFunction(event: any, searchedWord: string) {
    if (event.keyCode === 13) {
      this.inputRef.nativeElement.value = ''
      this.router.navigate(['/search'], {
        queryParams: { query: searchedWord },
      });
    }
  }

  toggleMobileMenu() {
    if (window.screen.width < 1000) {
      this.menuWrapper.nativeElement.classList.toggle('show');
      this.searchWrapper.nativeElement.classList.toggle('show');
    }
  }

  ngAfterViewInit() {}
}

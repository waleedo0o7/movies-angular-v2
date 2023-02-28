import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('loader', { static: false }) loader!: ElementRef;

  removeLoadingScreen() {
    setTimeout(() => {
      this.loader.nativeElement.classList.add('loaded');
    }, 500);

    setTimeout(() => {
      this.loader.nativeElement.remove()
    }, 1000);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.removeLoadingScreen();
  }
}

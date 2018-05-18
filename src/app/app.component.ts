import {Component, ElementRef, HostListener, Input} from '@angular/core';

export let MQ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  activePage = 'home';

  outClass = 'pt-page-moveToBottomFade';
  inClass = 'pt-page-rotateUnfoldTop';


  constructor(public element: ElementRef) {
    MQ = 'desktop';
  }

  static getDevice() {
    return window.getComputedStyle(document.querySelector('body'), '::before')
      .getPropertyValue('content').replace(/"/g, '')
      .replace(/'/g, '');
  }

  @HostListener('window:resize', ['$event']) onResize() {
    MQ = AppComponent.getDevice();
  }

  @HostListener('window:scroll', ['$event']) onScroll() {

    console.log(9);

  }

  pageTurn(activePage, nextPage) {

  }

}


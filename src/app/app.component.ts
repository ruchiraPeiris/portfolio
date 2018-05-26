import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

export let MQ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  {

  activePage = 'home';
  backgroundColor = '#fff';

  outClass = 'pt-page-moveToBottomFade';
  inClass = 'pt-page-rotateUnfoldTop';

  hours = (new Date()).getHours();
  isDayTime = this.hours > 6 && this.hours < 20;


  constructor(public element: ElementRef) {
    MQ = 'desktop';
    if (!this.isDayTime) {
      this.backgroundColor = '#252627';
    }

    $(document).css('background-color', '#252627');

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


import {Component, ElementRef, HostListener, Input} from '@angular/core';

export let MQ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

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


    if (AppComponent.getDevice() === 'desktop') {

      const componentPosition = this.element.nativeElement.offsetTop;
      const scrollTop = window.pageYOffset,
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        numSection = this.element.nativeElement.querySelectorAll('.cd-section').length;

      this.element.nativeElement.querySelectorAll('.cd-section').forEach(current_sector => {

        const bottom = current_sector.getBoundingClientRect().bottom;

        const opacity = bottom / windowHeight;
        current_sector.querySelectorAll('.cd-block')[0].style.opacity = opacity;

      });

    } else {
      this.element.nativeElement.querySelectorAll('.cd-section').forEach(current_sector => {
        current_sector.querySelectorAll('.cd-block')[0].style.opacity = 1;
      });
    }

  }

}


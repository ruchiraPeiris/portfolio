import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';
import {SlideChangerService} from '../slide-changer.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  balls: string = '';
  public MQ = 'desktop';
  public CurrentPage = 'home';

  isAnimating = false;

  animEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd',
    'animation': 'animationend'
  };

  animationForSection = [
    {
      outClass: 'pt-page-rotateFoldBottom',
      inClass: 'pt-page-moveFromTopFade'
    }, {
      outClass: 'pt-page-moveToTopFade',
      inClass: 'pt-page-rotateUnfoldBottom'
    }
  ];


  constructor(private data: SlideChangerService, private elementRef: ElementRef) {
  }


  @ViewChild('ballDiv') ballDiv: ElementRef;

  ngOnInit() {
    this.data.CurrentPage.subscribe(page => {

        if (this.CurrentPage !== page) {
          this.nextPage(this.CurrentPage, page);
          this.CurrentPage = page;
        }
      }
    );
  }

  nextPage(from, to) {

    from = from.split('|');
    to = to.split('|');

    const $from = $('#pt-main [data-section="' + from[0] + '"]');
    const $to = $('#pt-main [data-section="' + to[0] + '"]');

    if (this.isAnimating) {
      return false;
    }

    this.isAnimating = true;

    $to.addClass('pt-page-current');
    $from.addClass('pt-page-current');

    const animatedPair = this.animationForSection[(from[0] === 'home') ? 1 : 0];

    const outClass = animatedPair.outClass;
    const inClass = animatedPair.inClass;
    const $this = this;

    if (to[1]) {
      $('[data-section="' + to[0] + '"]').animate({
        scrollTop: $('[data-sub-section="' + to[1] + '"]').offset().top
      }, 1000);
    }


    if (from[0] !== to[0]) {

      $('body').attr('style', 'background-color:#ccc !important');

      $from.addClass(outClass).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
        $(this).off(e);
        $from.removeClass('pt-page-current');
        $from.removeClass(outClass);
      });

      $to.addClass(inClass).bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
        $to.removeClass(inClass);
        $this.isAnimating = false;
        $('body').attr('style', '');
      });
    }
    else {
      $this.isAnimating = false;
    }


  }


}

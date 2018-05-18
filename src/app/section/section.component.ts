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
  msg;

  isAnimating = false;
  endCurrPage = false;
  endNextPage = false;

  main: any = false;
  pages: any = false;
  current = 0;
  pagesCount = 0;
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


  constructor(private data: SlideChangerService) {
  }


  @ViewChild('ballDiv') ballDiv: ElementRef;

  ballInit() {


    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];

    const numBalls = 10;

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = ball.style.height = `${Math.random()}em`;

      const wrapper = document.createElement('div');
      wrapper.appendChild(ball);
      this.balls += wrapper.innerHTML;
      this.ballDiv.nativeElement.innerHTML = this.balls;

    }

    const ballList = this.ballDiv.nativeElement.querySelectorAll('.ball');


    ballList.forEach((el, i, ra) => {
      const to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      const anim = el.animate(
        [
          {transform: 'translate(0, 0)'},
          {transform: `translate(${to.x}rem, ${to.y}rem)`}
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );

    });
  }


  ngOnInit() {

    this.data.currentMsg.subscribe(msg => this.msg = msg);

    this.main = $('#pt-main');
    this.pages = this.main.children('div.pt-page');
    this.pagesCount = this.pages.length;
    if (AppComponent.getDevice() === 'desktop') {
      this.ballInit();
    }
  }

  nextPage() {


    if (this.isAnimating) {
      return false;
    }

    this.isAnimating = true;

    const $currPage = this.pages.eq(this.current);

    if (this.current < this.pagesCount - 1) {
      this.current++;
    } else {
      this.current = 0;
    }

    const $nextPage = this.pages.eq(this.current).addClass('pt-page-current');
    const animatedPair = this.animationForSection[this.current];
    const outClass = animatedPair.outClass;
    const inClass = animatedPair.inClass;

    const $this = this;

    $currPage.addClass(outClass).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function (e) {
      $this.endCurrPage = true;
      $(this).off(e);
      if ($this.endCurrPage) {
        $this.onEndAnimation($currPage, $nextPage, animatedPair);
        $currPage.removeClass('pt-page-current');

      }
    });

    $nextPage.addClass(inClass).bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
      if ($this.endCurrPage) {
        $this.onEndAnimation($currPage, $nextPage, animatedPair);

      }
    });


  }

  onEndAnimation($currPage, $nextPage, animatedClass) {
    this.endCurrPage = false;
    this.endNextPage = false;
    this.isAnimating = false;


    $currPage.removeClass(animatedClass.outClass);
    $currPage.removeClass(animatedClass.inClass);

    $nextPage.removeClass(animatedClass.outClass);
    $nextPage.removeClass(animatedClass.inClass);
  }


}

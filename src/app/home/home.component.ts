import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from '../app.component';
import {SlideChangerService} from '../slide-changer.service';
import Typed from 'typed.js';
import hljs from 'highlight.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  balls = '';
  MQ = 'desktop';
  CurrentPage;
  CodeType = [
    '<b>PHP:</b>^100\n &lt;?PHP class Idea extends Eloquent',
    '<b>ES6:</b>^100\nnums.forEach(v => {\n' +
    '  if (v % 5 === 0)\n' +
    '    fives.push(v);\n' +
    '});'
  ];


  @ViewChild('ballDiv') ballDiv: ElementRef;

  constructor(private data: SlideChangerService) {
  }

  showPage(Page) {
    return this.data.changeSlide(Page);
  }

  ballInit() {

    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];

    const numBalls = 20;

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

    this.data.CurrentPage.subscribe(page => this.CurrentPage = page);
    this.ballInit();

    if (AppComponent.getDevice() === 'desktop') {
    }

    const options = {
      strings: this.CodeType,
      typeSpeed: 40,
      backSpeed: 0,
      onStringTyped: function (pos, self) {
        $('.cording .code-body').each(function (i, block) {
          hljs.highlightBlock(block);
        });
      },
      loop: true
    };

    let typed = new Typed('.cording>.code-body', options);


  }

}

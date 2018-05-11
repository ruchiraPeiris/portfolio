import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  balls: string = '';
  MQ: string = 'desktop';

  @ViewChild('ballDiv') ballDiv: ElementRef;

  constructor() {
  }

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
    if (AppComponent.getDevice() === 'desktop') {
      this.ballInit();
    }

  }


}

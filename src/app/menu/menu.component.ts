import { Component, OnInit } from '@angular/core';

declare var Snap: any;
declare var mina: any;    // if you want to use animations of course

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpened = false;

  constructor() { }

  ngOnInit() {
  }
  showMenu() {

    const s = Snap('.overlay svg'),
      path = s.select('path'),
      overlay = document.querySelector('div.overlay'),
      steps = overlay.getAttribute('data-steps').split(';'),
      stepsTotal = steps.length;

    let pos = 0;

    let nextStep = function (pos) {
      pos++;
      if (pos > stepsTotal - 1) return;
      path.animate({'path': steps[pos]}, 60, mina.linear, function () {
        nextStep(pos);
      });
    };

    nextStep(pos);

    this.isOpened = true;
  }

}

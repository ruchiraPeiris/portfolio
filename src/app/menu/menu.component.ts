import {Component, Input, OnInit} from '@angular/core';
import {SlideChangerService} from '../slide-changer.service';
import * as $ from 'jquery';

declare var Snap: any;
declare var mina: any;    // if you want to use animations of course

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpened = false;
  @Input() public device;

  MenuItems = [
    {
      'name': 'home',
      'title': 'Home'
    }, {
      'name': 'resume',
      'title': 'Resume',
      'value': 'https://serve.supun.xyz/resume',
      'type': 'link',
    },
    {
      'name': 'details|portfolio',
      'title': 'Portfolio'
    },
    {
      'name': 'details|skill',
      'title': 'Skill'
    },
    {
      'name': 'details|about-me',
      'title': 'About Me'
    }
  ];

  constructor(private data: SlideChangerService) {
  }

  ngOnInit() {
  }

  showPage($event, Page, type = 'page', value = '#') {
    if (type === 'link') {
      window.open(value, '_blank');
      this.showMenu('close');
    } else {
      $event.preventDefault();
      this.showMenu('close');
      return this.data.changeSlide(Page);
    }
  }


  showMenu(action = 'close') {

    const s = Snap('.overlay svg'),
      path = s.select('path'),
      overlay = document.querySelector('div.overlay'),
      steps = overlay.getAttribute('data-steps').split(';'),
      stepsTotal = steps.length;


    if (this.isOpened || action === 'close') {

      const poses = stepsTotal - 1,
        nextStep = function (pos) {
          pos--;
          if (pos < 0) {
            return;
          }
          path.animate({
            'path': steps[pos]
          }, 60, mina.linear, function () {
            nextStep(pos);
          });
        };

      nextStep(poses);
      this.isOpened = false;
      $('.pt-page-current').removeClass('blur');
    } else if (action === 'open' || !this.isOpened) {

      const pos = 0;

      const nextStep = function (pos) {
        pos++;
        if (pos > stepsTotal - 1) {
          $('.pt-page-current').addClass('blur');
          return;
        }
        path.animate({'path': steps[pos]}, 60, mina.linear, function () {
          nextStep(pos);
        });
      };

      nextStep(pos);

      this.isOpened = true;
    }
  }

}

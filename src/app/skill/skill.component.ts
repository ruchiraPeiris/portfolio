import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {


  Skills = {
    front: [
      {name: 'JavaScript/ECMAScript 6', url: 'https://www.ecma-international.org/ecma-262/6.0/'},
      {name: 'CSS/SCSS', url: 'https://sass-lang.com/'},
      {name: 'jQuery/jQuery UI', url: 'https://jquery.com/'},
      {name: 'Bootstrap', url: 'https://getbootstrap.com/'},
      {name: 'Angular', url: 'https://angular.io/'}
    ],
    back: [
      {name: 'PHP', url: 'https://php.net'},
      {name: 'Laravel', url: 'https://laravel.com/'},
      {name: 'MySQL/MariaDB', url: 'https://mariadb.org/'},
      {name: 'Node.js/ECMAScript 6', url: 'https://nodejs.org/'}
    ],
    tool: [
      {name: 'PhpStorm/WebStorm', url: 'https://www.jetbrains.com/'},
      {name: 'Dreamweaver', url: 'https://www.adobe.com/products/dreamweaver.html'},
      {name: 'HeidiSQL', url: 'https://www.heidisql.com/'},
      {name: 'Studio 3T', url: 'https://studio3t.com/'},
      {name: 'Chrome DevTools', url: 'https://developers.google.com/web/tools/chrome-devtools/'}
    ],
    env: [
      {name: 'Docker', url: 'https://www.docker.com/'},
      {name: 'Vagrant', url: 'https://www.vagrantup.com/'},
      {name: 'CentOS/Ubuntu', url: 'https://www.centos.org/'},
      {name: 'XAMPP', url: 'https://www.apachefriends.org/'},
      {name: 'MEAN.JS', url: 'http://meanjs.org/'},
    ]
  };


  constructor() {
  }

  ngOnInit() {
  }

}

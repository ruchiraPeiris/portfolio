import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  projects = [
    {
      code: 'hpc',
      name: 'Real Time Holidays Package Creator (V2)',
      url: '',
      tech: ['Laravel', 'Jquery', 'Gulp', 'SCSS', 'Leaflet', 'Google Api', 'Bootstrap', 'and more...'],
      image: 'assets/images/appleholidays.png'
    },
    {
      code: 'jsql',
      name: 'JSQL',
      url: 'https://github.com/lifeeka/jsql',
      tech: ['PHP', 'Composer'],
      image: 'assets/images/jsql.png'
    },
    {
      code: 'lbz',
      name: 'Leaflet Bezier',
      url: 'https://github.com/lifeeka/leaflet.bezier',
      tech: ['javascript', 'Leaflet', 'snapsvg'],
      image: 'assets/images/leaflet.bezier.png'
    },
    {
      code: 'igy',
      name: 'Igiya',
      url: 'https://github.com/lifeeka/igiya',
      tech: ['javascript', 'axios', 'lodash'],
      image: 'assets/images/igiya.png'
    }
  ];
  optionSwal;

  constructor() {
  }

  ngOnInit() {

  }

  openProjectModel(project, code) {

    if (!project.url) {
      this.optionSwal = {
        title: project.name,
        html: $('#project-content [data-code="' + code + '"]').html(),
        width: '80%',
        padding: '3em'
      };
      Swal(this.optionSwal);
    }
  }

}

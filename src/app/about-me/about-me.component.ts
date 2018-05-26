import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required, Validators.min(10),  Validators.max(5000)]),
    });

  }

  onSubmit(data) {
    console.log(data);
  }


}

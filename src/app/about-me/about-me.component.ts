import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required, Validators.min(10)]),
    });

  }

  onSubmit(data) {

    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('message', data.description);

    this.http.post(environment.serve_url + 'say/hello', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .subscribe(d => {
        console.log(d);
      }, e => {
        console.log(e);
      });
  }


}

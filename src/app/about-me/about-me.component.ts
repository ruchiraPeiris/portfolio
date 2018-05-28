import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  form: FormGroup;
  sendBtn = 'Send';

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

    this.disableForm();
    this.http.post(environment.serve_url + 'say/hello', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .subscribe(d => {
        Swal(
          'Message has been sent!',
          'I\'ll get back to you.',
          'success'
        );
        this.disableForm(false);
      }, e => {
        Swal(
          'Oops, Something went wrong!',
          '',
          'error'
        );
        this.disableForm(true);
      });
  }

  disableForm(action = true) {
    if (action) {
      this.sendBtn = '<i class="fas fa-circle-notch fa-spin"></i>';
      this.form.disable();

    } else {
      this.sendBtn = 'Send';
      this.form.enable();
    }
  }


}

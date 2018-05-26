import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SlideChangerService {

  public page = new BehaviorSubject<string>('home');
  public CurrentPage = this.page.asObservable();

  changeSlide(Page) {
    this.page.next(Page);
  }


  constructor() {
  }

}

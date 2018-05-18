import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SlideChangerService {

  public msg = new BehaviorSubject<string>('test');
  currentMsg = this.msg.asObservable();

  change(s) {
    this.msg.next(s);
  }


  constructor() {
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  applicationHeader = new BehaviorSubject(false);
  constructor() {}

  isEnregistrer() {
    return this.applicationHeader.getValue() === true;
  }
  nextEnregistrer(val: boolean) {
    this.applicationHeader.next(val);
  }
}

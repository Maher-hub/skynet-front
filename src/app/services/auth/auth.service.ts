import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientModel } from 'src/app/components/default-page/authentifier/authentifier.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   ClientClaims: BehaviorSubject<ClientModel> = new BehaviorSubject<ClientModel>(null);
  constructor() {}

  isAuthentifier() {
    return this.auth.getValue() === true;
  }
  nextAuthentification() {
    this.auth.next(true);
  }
  deconnecter() {
    this.auth.next(false);
  }
}

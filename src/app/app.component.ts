import { Component } from '@angular/core';
import { ApplicationService } from './services/application/application.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-coskils-front';
  sideBaropen = true;
  register = false;
  header = true;
  constructor(private appService: ApplicationService){
    this.appService.applicationHeader.subscribe(d=>{
      this.register = d;
    })
  }
  emitIsHome(event) {
    console.log(this.appService.isEnregistrer())
    if (event === 'home') {
      this.register = false;
    } else if (event === 'enregistrer') {
      this.register = true;
    }
  }
}

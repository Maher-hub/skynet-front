import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isHome;
  @Output() emitIsHome = new EventEmitter();
  name;
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.name =
      this.authService.ClientClaims.getValue() === null
        ? ''
        : this.authService.ClientClaims.getValue().nom;
  }
  goto(val: string) {
    this.emitIsHome.emit(val);
  }
  deconnecter() {
    this.authService.deconnecter();
    this.router.navigate(['/home']);
  }
}

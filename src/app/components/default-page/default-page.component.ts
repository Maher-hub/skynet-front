import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthentifierComponent } from './authentifier/authentifier.component';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
})
export class DefaultPageComponent implements OnInit {
  mode: string;
  link: string;
  constructor(
    private router: Router,
    private appService: ApplicationService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  valider(val: string) {
    switch (val) {
      case 'invite':
        this.router.navigate(['/spectacle', { mode: 'invite' }]);
        break;
      case 'abonne':
        this.authentifier();
        break;
    }
  }

  async authentifier() {
    if (this.authService.isAuthentifier()) {
      this.router.navigate(['/spectacle', { mode: 'abonnee' }]);
    } else {
      const dialogRef = this.dialog.open(AuthentifierComponent);
      dialogRef.componentInstance.onAuth.subscribe((res) => {
        if (res) {
          this.authService.nextAuthentification();
          this.router.navigate(['/spectacle', { mode: 'abonnee' }]);
        }
      });
    }
    // dialogRef.afterClosed().subscribe((result) => {});
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
import { ApicallingService } from 'src/app/services/apicalling/apicalling.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-spectacle',
  templateUrl: './spectacle.component.html',
  styleUrls: ['./spectacle.component.scss'],
})
export class SpectacleComponent implements OnInit {
  mode;
  spectalce;
  places;
  showPlaces;
  constructor(
    private activateRoute: ActivatedRoute,
    private appService: ApplicationService,
    private apiService: ApicallingService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mode = this.activateRoute.snapshot.params.mode;
    this.appService.nextEnregistrer(false);
    this.apiService.getSpectacle().subscribe((d) => {
      this.spectalce = d;
    });
    this.apiService.getPlaces().subscribe((d) => {
      this.places = d;
      this.showPlaces = d[0];
    });
  }
  show(id: number) {
    this.showPlaces =
      this.places.filter((d) => {
        return d.spectacleId === id;
      }).length > 0
        ? this.places.filter((d) => {
            return d.spectacleId === id;
          })[0]
        : [];
  }
  async reserver(item, idSpec, service) {
    this.showPlaces.places.forEach((element) => {
      if (element.id == item.id) {
        element.reserved = null;
      }
    });
    const dialogRef = this.dialog.open(ReservationComponent, {
      data: {
        item: { idPlace: item, idSpectacle: idSpec, service: this.authService.isAuthentifier() },
      },
    });
    dialogRef.backdropClick().subscribe(() => {
      this.showPlaces.places.forEach((element) => {
        if (element.id == item.id) {
          element.reserved = false;
        }
      });
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.showPlaces.places.forEach((element) => {
          if (element.id == result) {
            element.reserved = true;
          }
        });
      }
    });
  }
}

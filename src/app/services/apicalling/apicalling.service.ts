import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


interface ApiModel {
  _embedded: { spectacles: Spectacle[] };
}
interface Spectacle {
  titre: string;
  auteur: string;
  nbrPlace: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApicallingService {

  constructor(private htttClient: HttpClient) {}

  getSpectacle(): Observable<Spectacle[]> {
    return this.htttClient
      .get<ApiModel>('http://localhost:8080/spectacles')
      .pipe(
        map((response) => {
          return response._embedded.spectacles;
        })
      );
    // return of([
    //   {
    //     id: 1,
    //     auteur: 'Inès Reg',
    //     titre: 'Hors normes',
    //     nbrPlace: ''
    //   },
    //   {
    //     id: 2,
    //     auteur: 'Panayotis Pascot',
    //     titre: 'Presque',
    //     nbrPlace: ''
    //   },
    //   {
    //     id: 3,
    //     auteur: 'Jason Brokerss',
    //     titre: '21ème Seconde',
    //     nbrPlace: ''
    //   },
    //   {
    //     id: 4,
    //     auteur: 'Benjamin Tranié',
    //     titre: 'Le dernier relais',
    //     nbrPlace: ''
    //   },
    // ]);
  }
  getPlaces() {
    return of([
      {
        service: true,
        spectacleId: 1,
        places: [
          { id: 1, numeroPlace: 'pk1', reserved: false },
          { id: 2, numeroPlace: 'pk2', reserved: false },
        ],
      },
      {
        service: true,
        spectacleId: 2,
        places: [
          { id: 1, numeroPlace: 'pk1', reserved: false },
          { id: 2, numeroPlace: 'pk2', reserved: false },
          { id: 3, numeroPlace: 'pk3', reserved: true },
          { id: 4, numeroPlace: 'pk4', reserved: true },
        ],
      },
      {
        service: true,
        spectacleId: 3,
        places: [
          { id: 1, numeroPlace: 'pk1', reserved: false },
          { id: 2, numeroPlace: 'pk2', reserved: false },
          { id: 3, numeroPlace: 'pk3', reserved: true },
        ],
      },
      {
        service: true,
        spectacleId: 4,
        places: [{ id: 1, numeroPlace: 'pk1', reserved: false }],
      },
    ]);
  }
  seConnecter(infoAuth: { mdp: string; pseudo: string }) {
    return this.htttClient.post('http://localhost:8080/connecter', { creditials: infoAuth });
  }
}

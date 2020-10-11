import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApicallingService } from 'src/app/services/apicalling/apicalling.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Md5 } from 'ts-md5/dist/md5';
interface DialogData {
  pseudo: string;
  mdp: string;
}
export interface ClientModel {
  abonne: boolean;
  adresse: string;
  id: string;
  mail: string;
  mdp: string;
  nom: string;
  numero_Telephone: string;
  prenom: string;
  services: any;
}

@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.scss'],
})
export class AuthentifierComponent implements OnInit {
  md5: Md5;
  onAuth = new EventEmitter<boolean>();
  constructor(
    private apiService: ApicallingService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<AuthentifierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.md5 = new Md5();
  }
  profileForm = new FormGroup({
    pseudo: new FormControl(''),
    mdp: new FormControl(''),
  });
  ngOnInit(): void {}

  connected() {
    const mdp: string = this.md5
      .appendStr(this.profileForm.value.mdp)
      .end()
      .toString();
    console.log(this.profileForm.value.mdp);
    this.apiService
      .seConnecter({
        mdp: this.profileForm.value.mdp,
        pseudo: this.profileForm.value.pseudo,
      })
      .subscribe((client: ClientModel) => {
        console.log(client);
        if (client.id === null) {
          this.onAuth.emit(false);
        } else {
          this.authService.ClientClaims.next(client);
          this.onAuth.emit(true);
          this.dialogRef.close();
        }
      });
  }
}

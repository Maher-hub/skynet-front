import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { EnregistrerComponent } from './components/enregistrer/enregistrer.component';
import { SpectacleComponent } from './components/spectacle/spectacle.component';
import { ReservationComponent } from './components/spectacle/reservation/reservation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthentifierComponent } from './components/default-page/authentifier/authentifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultPageComponent,
    EnregistrerComponent,
    SpectacleComponent,
    ReservationComponent,
    AuthentifierComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

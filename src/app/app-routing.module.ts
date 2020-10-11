import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { EnregistrerComponent } from './components/enregistrer/enregistrer.component';
import { SpectacleComponent } from './components/spectacle/spectacle.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultPageComponent,
  },
  {
    path: 'spectacle',
    component: SpectacleComponent,
    data: { mode: '' },
  },
  {
    path: 'enregistre',
    component: EnregistrerComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

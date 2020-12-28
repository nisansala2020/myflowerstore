import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LandingComponent } from './modules/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, 
  { path: 'landing', component: LandingComponent },              // Add this
  { path: 'home', component: HomeComponent },

  // Add this
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

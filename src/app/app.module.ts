import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landing/landing.component';
import { HomeComponent } from './modules/home/home.component';
import { CardModule } from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { FlowerCardComponent } from './modules/cards/flower-card/flower-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    FlowerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    InputTextModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

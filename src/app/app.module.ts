import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AbmComponent } from './components/abm/abm.component';
import { APP_ROUTING } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AbmComponent],
  imports: [BrowserModule, HttpModule, APP_ROUTING, ReactiveFormsModule, FormsModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}

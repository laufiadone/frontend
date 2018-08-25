import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  url: string = 'http://localhost:4100';

  constructor(private _http: Http) {}

  createPelicula(pelicula: any) {
    return this._http.post(`${this.url}/insertar_pelicula`, pelicula);
  }
}

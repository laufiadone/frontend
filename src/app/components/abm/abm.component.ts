import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {
  peliculasGroup: FormGroup;

  constructor(private apiP: PeliculasService) {}

  ngOnInit() {
    this.peliculasGroup = new FormGroup({
      nombre: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required)
    });
  }

  guardarPelicula() {
    this.apiP
      .createPelicula(this.peliculasGroup.value)
      .toPromise()
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

    console.log(this.peliculasGroup.value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  [x: string]: any;
  @Input() nuevo: Personaje = {
    nombre: 'Duvis07',
    poder: 11111,
  };

  constructor(private dbzService: DbzService) {}

  /*   @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    /*    this.onNuevoPersonaje.emit(this.nuevo); */
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}

import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  get personajesArr(): Personaje[] {
    return [...this.personajes];
  }

  agregarPersonaje(personaje: Personaje) {
    this.personajes.push(personaje);
    alert('Personaje agregado');
  }
}

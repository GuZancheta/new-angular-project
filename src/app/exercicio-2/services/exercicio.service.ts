import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  constructor() { }

  getParagrafo() {
    return 'Parágrafo';
  }
}

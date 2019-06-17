import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroServicoService {

  constructor() { }

  getTitulo() {
    return 'Meu primeiro serviço';
  }
}

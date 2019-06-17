import { Component } from '@angular/core';
import { PrimeiroServicoService } from '../services/primeiro-servico.service';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent {

  title: string;

  constructor(
    private primeiroServico: PrimeiroServicoService
  ) {
    this.title = this.primeiroServico.getTitulo();
  }

}

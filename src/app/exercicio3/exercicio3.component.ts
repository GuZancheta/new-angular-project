import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.scss']
})
export class Exercicio3Component implements OnInit {

  nome = '';
  email = '';
  telefone = '';

  constructor() { }

  ngOnInit() {
  }

  alerta(event) {
    alert('Formulário Enviado');
  }
}

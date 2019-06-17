import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  texto = 'Interpolação';
  curso = 'Angular';
  nome = 'João';
  enderecoImg = 'https://picsum.photos/500/300';
  sobrenome = '';

  constructor() { }

  ngOnInit() {
  }

  getTexto() {
    return 'Meu Texto';
  }

  alterarValor(event) {
    console.log(event.target.value);
  }

  emiteAlerta(evento) {
    alert('Clicou');
    console.log(evento);
  }

  setaSobrenome(v) {
    this.sobrenome = v;
  }
}

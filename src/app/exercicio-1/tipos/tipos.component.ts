import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit {

  private title: string;
  numero: any = 3;
  verdadeiro = true;

  meuObjeto = {};

  constructor() {
    const novaVariavel = 'Nova Variavel';
    this.title = 'Título';
    this.numero = '';
    this.verdadeiro = false;
    this.meuObjeto = 89;
    this.meuObjeto = 'novo';
    console.log(this.meuObjeto);
    // this.emitirAlerta();
  }

  ngOnInit() {
  }

  emitirAlerta() {
    alert('oi');
  }

}

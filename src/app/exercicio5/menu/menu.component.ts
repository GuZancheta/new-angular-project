import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  valida = true;

  texto = 'Titulo 1';

  menus = [
    {descricao: 'Home', link: 'home'},
    {descricao: 'Pessoa', link: 'pessoa'},
  ];

  constructor() { }

  ngOnInit() {
  }

  alternar() {
    if (this.valida === false) {
      this.texto = 'Titulo 2';
      this.valida = true;
    } else {
      this.texto = 'Titulo 1';
      this.valida = false;
    }
  }
}

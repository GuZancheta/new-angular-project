import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  tituloPai = 'Titulo recebido do pai';

  constructor() { }

  ngOnInit() {
  }

  onSearchPai(value) {
    console.log('Pai: ', value);
  }

}

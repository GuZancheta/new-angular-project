import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  templateUrl: './properties-binding.component.html',
  styleUrls: ['./properties-binding.component.scss']
})
export class PropertiesBindingComponent implements OnInit {

  paragrafoPai = 'Meu paragrafo que eu recebi do meu componente';

  constructor() { }

  ngOnInit() {
  }

  onChangePai(event) {
    console.log('componente Pai', event);
  }

}

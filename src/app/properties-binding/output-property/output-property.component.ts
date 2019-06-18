import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Output() mudouTexto = new EventEmitter<HTMLElement>();

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.mudouTexto.emit(value);
    console.log('Componente filho', value);
  }
}

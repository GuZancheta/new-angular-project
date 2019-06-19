import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() titulo: string;

  @Output() pesquisa = new EventEmitter<HTMLElement>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(pesquisa) {
    console.log(pesquisa);
  }
}

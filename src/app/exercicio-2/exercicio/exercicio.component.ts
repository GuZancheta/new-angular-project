import { Component, OnInit } from '@angular/core';
import { ExercicioService } from '../services/exercicio.service';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.scss']
})
export class ExercicioComponent implements OnInit {

  title: string;

  constructor(
    private exercicioServico: ExercicioService
  ) {
    this.title = this.exercicioServico.getParagrafo();
  }

  ngOnInit() {
  }

}

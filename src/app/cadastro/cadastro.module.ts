import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormularioModule } from '../formulario/formulario.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FormularioModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }

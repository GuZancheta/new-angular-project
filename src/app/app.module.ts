import { CadastroModule } from './cadastro/cadastro.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './exercicio-1/container/container.component';
import { HeaderComponent } from './exercicio-1/header/header.component';
import { MainComponent } from './exercicio-1/main/main.component';
import { TiposComponent } from './exercicio-1/tipos/tipos.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { ExercicioComponent } from './exercicio-2/exercicio/exercicio.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent,
    TiposComponent,
    PrimeiroComponenteComponent,
    ExercicioComponent,
    DataBindingComponent,
    Exercicio3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

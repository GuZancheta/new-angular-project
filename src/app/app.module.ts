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
import { PropertiesBindingComponent } from './properties-binding/properties-binding.component';
import { InputPropertyComponent } from './properties-binding/input-property/input-property.component';
import { OutputPropertyComponent } from './properties-binding/output-property/output-property.component';
import { FilhoComponent } from './exercicio4/filho/filho.component';
import { PaiComponent } from './exercicio4/pai/pai.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { IfForComponent } from './diretivas-primeira-parte/if-for/if-for.component';
import { DiretivasPrimeiraParteComponent } from './diretivas-primeira-parte/diretivas-primeira-parte.component';
import { MenuComponent } from './exercicio5/menu/menu.component';

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
    Exercicio3Component,
    PropertiesBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    FilhoComponent,
    PaiComponent,
    ViewChildComponent,
    IfForComponent,
    DiretivasPrimeiraParteComponent,
    MenuComponent
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

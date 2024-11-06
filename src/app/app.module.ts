import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


//  Material
import { MaterialModule } from './librerias/material/material.module';

import { EstructuraPrincipalComponent } from './componentes/interface/pagina/estructura-principal.component';
import { CabeceraComponent } from './componentes/interface/pagina/cabecera.component';
import { PieComponent } from './componentes/interface/pagina/pie.component';
import { BotoneraComponent } from './compartidos/interfaces/elementos/botonera.component';
import { HomeComponent } from './componentes/paginas/home.component';
import { EquipoComponent } from './componentes/paginas/equipo.component';
import { FormRepositoriosAplicacionesCreacionComponent } from './componentes/formularios/autogestion/form-repositorios-aplicaciones-creacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EstructuraPrincipalComponent,
    CabeceraComponent,
    PieComponent,
    BotoneraComponent,
    HomeComponent,
    EquipoComponent,
    FormRepositoriosAplicacionesCreacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//  Paginas
import { HomeComponent } from 'src/app/componentes/paginas/home.component';
import { EquipoComponent } from 'src/app/componentes/paginas/equipo.component';


//  Formularios
import { FormRepositoriosAplicacionesCreacionComponent } from 'src/app/componentes/formularios/autogestion/form-repositorios-aplicaciones-creacion.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'autogestion/formularios', component: FormRepositoriosAplicacionesCreacionComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

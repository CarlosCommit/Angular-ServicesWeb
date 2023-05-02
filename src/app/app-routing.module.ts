import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';

const routes: Routes = [
  {path:"layout",component:Punto1Component},
  {path:"musica",component:Punto2Component},
  {path:"cambio",component:Punto3Component},
  {path:"horoscopo",component:Punto4Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';

const routes: Routes = [
  {path:"", redirectTo:"musica", pathMatch:'full'},
  {path:"musica",component:Punto2Component},
  {path:"cambio",component:Punto3Component},
  {path:"horoscopo",component:Punto4Component},
  {path:"textSpeech",component:TextToSpeechComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

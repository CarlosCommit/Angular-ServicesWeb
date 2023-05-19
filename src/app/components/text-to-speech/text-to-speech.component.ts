import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent implements OnInit {
  texto!: string;
  audioUrl!:any; 
  lenguajes!:Array<any>;
  lenguajeElegido!:string;

  constructor(private textSpeech: TextToSpeechService, private sanitizer: DomSanitizer) {

   this.textSpeech.getLanguaje().subscribe(response=>{
    console.log(response);
     this.lenguajes=Object.entries(response);
     console.log(this.lenguajes);
  })
   }

  ngOnInit(): void {}

  convertirTexto(): void {
    this.textSpeech.getAudio(this.texto,this.lenguajeElegido).subscribe(
      
      (response: Blob) => {
        // Crear URL del objeto Blob
        console.log(response);
        const unsafeUrl = URL.createObjectURL(response);
        this.audioUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
        console.log(this.audioUrl);
      },
      (error) => {
        console.error('Error al obtener el audio:', error);
      }
    );
  }

  limpiar()
  {
    this.audioUrl=null;
  }
}

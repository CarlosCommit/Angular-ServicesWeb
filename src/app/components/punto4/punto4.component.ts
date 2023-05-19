import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  signos!:Array<any>;
 horoscopo:{title:string,horoscope:string,img:string}={title:"",horoscope:"",img:""}
  constructor(private horoscopeService:HoroscopoService) { 

    this.signos= [
      {
        nombre:"Aries",
        img:"aries.png",
        value:"aries"
        
      },
      {
        nombre:"Tauro",
        img:"tauro.png",
        value:"taurus"
        
      },
      {
        nombre:"Geminis",
        img:"geminis.png",
        value:"gemini"
        
      },
      {
        nombre:"Cancer",
        img:"cancer.png",
        value:"cancer"
        
      },
      {
        nombre:"Leo",
        img:"leo.png",
        value:"leo"
        
      },
      {
        nombre:"Virgo",
        img:"virgo.png",
        value:"virgo"
        
      },
      {
        nombre:"Libra",
        img:"libra.png",
        value:"libra"
        
      },
      {
        nombre:"Escorpio",
        img:"escorpio.png",
        value:"scorpio"
        
      },
      {
        nombre:"Sagitario",
        img:"sagitario.png",
        value:"sagittarius"
        
      },
      {
        nombre:"Capricorio",
        img:"capricornio.png",
        value:"capricorn"
        
      },
      {
        nombre:"Acuario",
        img:"acuario.png",
        value:"aquarius"
        
      },
      {
        nombre:"Piscis",
        img:"piscis.png",
        value:"pisces"
        
      },
    ]
  }

  ngOnInit(): void {
  }

  public getHoroscope(signo:any)
  {

    this.horoscopeService.getHoroscope('month',signo.value).subscribe((response:any)=>{
      console.log(response);
      this.horoscopo.horoscope = response.horoscope;
      this.horoscopo.title = signo.nombre;
      this.horoscopo.img = signo.img;
    })

  }
}

import { Component, OnInit } from '@angular/core';
import { ItemMusica } from 'src/app/models/item-musica';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  musica:Array<ItemMusica>;
  constructor() {
    this.musica=[
      {img:"quevedo.jpg",titulo: "Quevedo",top:["Punto G", "Ahora Y Siempre" ,"BZRP Music Session #52"]},
      {img:"duki.jpg",titulo: "Duki",top:["Goteo" ,"Hello Cotto"," LeBron"]},
      {img:"becerra.jpg",titulo: "Maria Becerra",top:["Automático", "Acaramelao", "Felices x Siempre"]},
      {img:"eminem.jpg",titulo: "Eminem",top:["Without Me","Lose Yourself", "Stan"]},
      {img:"badbunny.jpg",titulo: "Bad Bunny",top:["Yonagumi", "Estamos Bien", "La Romana"]},
      {img:"billie.jpg",titulo: "Billie Eilish",top:["Lovely","Happier Than Ever","Lost Cause"]},
      {img:"paulo.jpg",titulo: "Paulo Londra",top:["Adan Y Eva","Tal Vez", "Nena Maldicion"]},
      {img:"arcangel.jpg",titulo: "Arcangel",top:["Me Acostumbre" ,"Invicto","Original"]}
    ]
   }

  ngOnInit(): void {
  }

}

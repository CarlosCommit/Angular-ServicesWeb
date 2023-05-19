import { Component, OnInit } from '@angular/core';
import { concatMap, from } from 'rxjs';
import { ItemMusica } from 'src/app/models/item-musica';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  sugeridos!:Array<number>;
  input!:string;
  music!:Array<any>;
  urlNext!:string;
  urlPreview!:string;



  constructor(private musicService:MusicService) {
    this.music=[];
    this.musicService.getSugeridos().subscribe( (resultado:any) => {
      this.music = resultado.data;
   }, error=>{
    console.log("No inicio el servidor con la configuracion del proxy (ng serve --proxy-config proxy.conf.json) ",error);
    this.sugeridos=[1520227652,2144446877,1741494317,15437242,1811481707,1265852952,2136493657,537033822,4211101];
    //hacemos un "for" asincrono para evitar problemas
    from(this.sugeridos).pipe(
      concatMap( (id:number) => this.musicService.getTrack(id))
    ).subscribe((data) => {
    
     this.music.push(data);
    });
   });
  }

  ngOnInit(): void {
  }
  public buscar():void{
    this.musicService.searchMusic(this.input).subscribe(result=>{
      this.music = result.data; 
      this.urlNext = result.next;
     console.log(result);

    })
  }

  next(direccion:string)
  {
    let url = (direccion=='next')? this.urlNext : this.urlPreview;
   this.musicService.nextPage(url.split("?")[1]).subscribe(result=>{
    this.music = result.data;
    this.urlNext = result.next;
    this.urlPreview = result.prev;
  
  },
  error=>
  {
    alert("Para poder tener la funcionalidad de paginado, debe levantar el servidor como ng serve --proxy-conf proxy.conf.json, he configurado un proxy para jugar de intermediario asi 'evadir los CORS del navegador'");
  }
  
    );
}

}

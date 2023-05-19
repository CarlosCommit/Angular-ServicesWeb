import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  monedas!:Array<any>;
  cantidad!:number;
  from!:string; 
  to!:string;
  resultado:{conversion:number; moneda:string} ={ conversion: 0, moneda: '' };


  constructor(private conversion:ConversionService) {

    this.conversion.getMonedas().subscribe( resultado=> {
      console.log(resultado);
      this.monedas = resultado;
    },
    error=>{
      console.log("error al consumir la api");
    })
  }

  ngOnInit(): void {
  }


  public getConversion()
  {
    this.conversion.getConversion(this.from, this.to, this.cantidad).subscribe(resultado=>{
      this.resultado.conversion=resultado.result.convertedAmount;
      this.resultado.moneda= resultado.result.to;
      console.log(resultado)
    });
  }

  public limpiar()
  {
    if(this.resultado.conversion!=0)
      this.resultado.conversion=0;
  }

}

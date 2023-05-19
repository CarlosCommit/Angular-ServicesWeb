import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private http:HttpClient) { }

  public getMonedas():Observable<any>
  {
    const options={
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }
    }
  return this.http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies', options);
  }

  
  public getConversion(from:string, to:string, amount:number):Observable<any>
  {
    const options={
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      },
      params:{

        from: from,
        to: to,
        amount: amount

      }
    }
  return this.http.get('https://currency-converter18.p.rapidapi.com/api/v1/convert', options);
  }
}

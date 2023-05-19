import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private http:HttpClient) { }

  public getHoroscope(day:string, signo:string){

    const options = {
     
      params: {
        day: day,
        sunsign: signo  
       },
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
      }
    };

    return this.http.get('https://horoscope-astrology.p.rapidapi.com/horoscope',options)
    

  }

}


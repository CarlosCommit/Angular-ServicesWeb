import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpClient:HttpClient) { }

  public searchMusic(busqueda:string):Observable<any>
  {
    const options = {
      params: {q: busqueda},
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    return this.httpClient.get('https://deezerdevs-deezer.p.rapidapi.com/search',options)
  }

  public nextPage(url:string):Observable<any>{ 
    return this.httpClient.get("/api/search?"+url); 
  }

  //Sugeridos
  public getSugeridos()
  {

    const options = {
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    return this.httpClient.get('/api/chart/0/tracks',options)
    

  }

  public getTrack(id:number)
  {

    const options = {
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    return this.httpClient.get('https://deezerdevs-deezer.p.rapidapi.com/track/'+id,options)
    

  }
}

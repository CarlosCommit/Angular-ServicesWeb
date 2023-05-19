import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor(private http:HttpClient) { }
public getLanguaje():Observable<any>
{

  const options = {
    headers: {
      'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
      'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com'
    }
  };

  return this.http.get( 'https://text-to-speech27.p.rapidapi.com/speech/lang',options);
}
  public getAudio(text:string,idioma:string): Observable<any>{
    const options = {
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com'
      },
      params: {
        text: text,
        lang: idioma
      },
      responseType: 'blob' as 'json'
    };
  
    return this.http.get('https://text-to-speech27.p.rapidapi.com/speech', options);
  }}
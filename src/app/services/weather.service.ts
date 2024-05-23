import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string = 'http://localhost:3000/api/weather'
  constructor(private httpClient: HttpClient) { }


  search(obj:any){
    return this.httpClient.post<{apiRes:any}>(this.url,obj);
  }
}

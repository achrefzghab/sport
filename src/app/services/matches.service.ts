import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  url: string = 'http://localhost:3000/matches'

  constructor(private httpClient: HttpClient) { }
  addMatches(match: any) {
    return this.httpClient.post<{ message: any }>(this.url, match)

  }
  getAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.url)
  }
  getMatcheById(id: any) {
    //  http://localhost:3000/matches/1
    console.log("here  service id", `${this.url}/${id}`);
    
    return this.httpClient.get<{ match: any }>(`${this.url}/${id}`)
  }
  deleteMatches(id: any) {
    return this.httpClient.delete<{ message: any }>(`${this.url}/${id}`)
  }
  updateMatches(match: any) {
    return this.httpClient.put<{ message: any }>(this.url, match)

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url = 'http://localhost:3000/api/teams'
  constructor(private httpClient: HttpClient) { }
  addTeams(teamObj: any) {
    return this.httpClient.post<{ message: any }>(this.url, teamObj)
  }
  getAllTeams() {
    return this.httpClient.get<{ team: any }>(this.url)
  }
  getTeamById(id: any) {
    return this.httpClient.get<{ team: any }>(`${this.url}/${id}`)
  }
  deleteTeam(id: any) {
    return this.httpClient.delete<{ team: any }>(`${this.url}/${id}`)
  }
  updateTeam(teamObj: any) {
    return this.httpClient.put<{ team: any }>(this.url, teamObj)
  }
  getAllTeamWithPlayer(){
    return this.httpClient.get<{teams:any}>("http://localhost:3000/api/teamsPlayers");
  }
}

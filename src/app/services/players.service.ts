import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  url: string = 'http://localhost:3000/api/players'
  constructor(private httpClient: HttpClient) { }
  addPlayers(player: any) {
    return this.httpClient.post<{ msg: any }>(this.url, player)

  }
  getAllPlayers() {
    return this.httpClient.get<{ players: any }>(this.url)
  }
  getPlayersById(id: any) {
    return this.httpClient.get<{ player: any }>(`${this.url}/${id}`)
  }
  deletePlayers(id: any) {
    return this.httpClient.delete<{ message: any }>(`${this.url}/${id}`)
  }
  updatePlayers(player: any) {
    return this.httpClient.put<{ player: any }>(this.url, player)
  }
  getAllPlayersWithTeam() {
    return this.httpClient.get<{players:any}>("http://localhost:3000/api/Playersteam")
  }
}

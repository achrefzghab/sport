import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-player-tab',
  templateUrl: './player-tab.component.html',
  styleUrls: ['./player-tab.component.css']
})
export class PlayerTabComponent implements OnInit {

  playerTab: any = [];
  player: any ;
  msg:any =''
  constructor(private router: Router,private playerService:PlayersService) { }
  ngOnInit() {
    this.getAllPlayer();
  }
  getAllPlayer() {
    this.playerService.getAllPlayersWithTeam().subscribe((res) => {
      this.playerTab = res.players
  });
}
  nameTeam(playerId: any) {

    return this.playerTab.find((m: any) => m.id == playerId);
  }
  display(id: Number) {
    this.router.navigate([`playerinf/${id}`])
  }
  goToEdit(id: any) {
    this.router.navigate([`edit-player/${id}`])
  }
delete(id:number){
  this.playerService.deletePlayers(id).subscribe((result) => {
    this.getAllPlayer()
    this.msg = result.message
    alert('deleted')
})
  }
}


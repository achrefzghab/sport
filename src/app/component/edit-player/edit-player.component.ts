import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm !: FormGroup;
  id!:any;
  player:any;
  playerTab =[];
  constructor(private acitvateRouter:ActivatedRoute, private playerService:PlayersService) { }

  ngOnInit() {
    this.id = this.acitvateRouter.snapshot.params['id'];
    this.player = this.playerTab.find((m:any) => m.id == this.id )
  }
  getPlayerById(){
    this.playerService.getPlayersById(this.id).subscribe((res)=>{
      this.player=res.player
    })
  }
  editPlayer(){
    
this.playerService.updatePlayers(this.player).subscribe((res)=>{
  console.log(res.player);
  })
  }
}

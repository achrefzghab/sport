import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/genralFunction/genericFunction';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
player:any={};
teamId :any ;
msg:any ='';
playerForm !: FormGroup;
teamTab :any = [];
  constructor(private playerService:PlayersService,private teamService:TeamsService
  ) { }

  ngOnInit(): void {
   this.teamService.getAllTeams().subscribe((res)=>{
    this.teamTab=res.team;
    console.log('gg',this.teamTab);
    
   })
  }
  
    addPlayer(){    
      this.player.tId=this.teamId;
      this.playerService.addPlayers(this.player).subscribe((result)=>{
      console.log(result.msg);
      this.msg = result.msg;
    })
     }
     selectTeamId(evt:any){
      console.log(evt.target.value);
      this.teamId = evt.target.value;
       
     }
   
    
  }



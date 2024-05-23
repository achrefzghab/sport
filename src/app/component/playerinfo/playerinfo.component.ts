import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent implements OnInit {
id !: number;
player : any;
playerTab =[
];
  constructor(private activateRouter:ActivatedRoute,private playerService:PlayersService) {
   }

  ngOnInit() {
    
    this.id = this.activateRouter.snapshot.params['id'];
    this.player = this.playerTab.find((p:any) => p.id == this.id);
    this.playerService.getPlayersById(this.id).subscribe((res)=>{
      this.player=res.player; 

  });

}
}

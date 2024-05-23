import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id!:any;
  team:any;
  teamTab =[];
  constructor(private activateRouter:ActivatedRoute, private teamService:TeamsService) { }

  ngOnInit(){
    this.id = this.activateRouter.snapshot.params['id'];
    this.team = this.teamTab.find((t:any) =>(t.id==this.id))
  }
  getTeamById(){
    this.teamService.getTeamById(this.id).subscribe((res)=>{
      this.team=res.team
    })
  }
  editTeam(){
    
this.teamService.updateTeam(this.team).subscribe((res)=>{
  console.log(res.team);
  })
  }
}


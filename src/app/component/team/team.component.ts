import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deletePos } from 'src/app/genralFunction/delete';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
teamTab :any =[];
  constructor(private router:Router,private teamService:TeamsService) { }
display (id:number){
  this.router.navigate([`teaminfo/${id}`])
}
  ngOnInit(): void {
    // this.teamTab=JSON.parse(localStorage.getItem('Teams')|| '[]')
    this.teamService.getAllTeamWithPlayer().subscribe((result)=>{
      console.log('Here all teams from be',result.teams);
      this.teamTab=result.teams
      
    })
  }
  editTeam(id:any){
    this.router.navigate([`edit-team/${id}`])
  }
delete(id:any){
  deletePos(id,'Teams',this.teamTab)
}
}

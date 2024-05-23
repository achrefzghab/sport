import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent implements OnInit {
  team: any = {};
  TeamForm !: FormGroup;
  msg:any ='';
  constructor(private teamservice:TeamsService) { }

  ngOnInit(): void {
  }

  addTeam() {

    this.teamservice.addTeams(this.team).subscribe((result)=>{
      console.log(result.message);
      this.msg = result.message;
    });







    // let TeamTab = JSON.parse(localStorage.getItem("Teams") || "[]");
    // this.team.id = this.generateId(TeamTab);
    // TeamTab.push(this.team);
    // localStorage.setItem("Teams", JSON.stringify(TeamTab));
  }


}


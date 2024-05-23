import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  searchForm !: FormGroup;
  foundTeam: any = [];
  teamTab: any = [];
  playerTab: any = [];
  founPlayer : any =[];
  constructor(private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fBuilder.group({
      search: ['', Validators.required]
    });
    this.teamTab = JSON.parse(localStorage.getItem('Teams') || '[]');
    this.playerTab = JSON.parse(localStorage.getItem('players') || '[]');

  }
  search() {

    let teamName = this.searchForm.value.search;
    let foundTeam : any ={};
    let founPlayer : any = [];
    this.foundTeam = this.teamTab.find((m: any) => m.Name == teamName);
    this.founPlayer = this.playerTab.filter((player: any) => player.tId == this.foundTeam.id);
   
  }
}

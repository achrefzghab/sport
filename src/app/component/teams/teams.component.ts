import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamTab :any =[
 ];
  constructor() { }

  ngOnInit(): void {
    this.teamTab=JSON.parse(localStorage.getItem('Teams')|| '[]')
  }

}

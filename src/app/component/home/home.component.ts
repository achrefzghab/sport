import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match ={matcheOne: 1, scoreOne: 0, teamOne: 'RMD', scoreTwo: 3, teamTwo: 'FCB'};
  constructor() { }

  ngOnInit(): void {
  }

}

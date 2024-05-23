import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab :any = [];
  constructor() { }

  ngOnInit(): void {
    this.matchesTab = JSON.parse(localStorage.getItem('matches') || '[]' )
  }

}

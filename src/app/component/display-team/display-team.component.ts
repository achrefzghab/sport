import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
@Input() obj:any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.css']
})
export class TeaminfoComponent implements OnInit {
  team : any ;
  id!:number;
  teamTab :any =[
  
    ];
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.team = this.teamTab.find((t:any) => t.id == this.id);
  }

}

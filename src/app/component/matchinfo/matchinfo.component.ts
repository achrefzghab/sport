import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit {
id !: number ;

match:any ;
  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchesService) { }

  ngOnInit() {
this.id = this.activatedRoute.snapshot.params['id'];
this.matchService.getMatcheById(this.id).subscribe((res)=>{
this.match=res.match; 
})

}

  }



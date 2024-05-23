import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id!: number;
  matchForm !: FormGroup;
  match: any ={};
  matcheTab = [];
  msg:any ='';
  constructor(private activateroute: ActivatedRoute, private matchService: MatchesService, private router:Router) {

  }

  ngOnInit() {
    this.id = this.activateroute.snapshot.params['id'];
    this.getMatchById()

  }
  getMatchById() {
    this.matchService.getMatcheById(this.id).subscribe((res) => {
      this.match = res.match
    })
  }
  editMatch() {
    this.matchService.updateMatches(this.match).subscribe((res) => {
      console.log('here resopnse afetr ', res.message);
      // this.router.navigate(['admin'])
      this.msg = res.message;
      
    })
  }
}

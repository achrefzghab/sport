import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/genralFunction/genericFunction';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  // match objet
  match: any = {};
  msg: any = '';
  // form id 
  matchForm !: FormGroup;
  constructor(private matchService: MatchesService) { }

  ngOnInit(): void {
  }
  addMatch() {
    this.matchService.addMatches(this.match).subscribe((result) => {
      console.log(result.message);
      this.msg = result.message;
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matche-tab',
  templateUrl: './matche-tab.component.html',
  styleUrls: ['./matche-tab.component.css']
})
export class MatcheTabComponent implements OnInit {

  matcheTab: any = [];
  match: any;
  msg: string = '';
  constructor(private router: Router, private matchService: MatchesService) { }

  ngOnInit() {
    this.getAllMatche();
  }

  Disc(a: number, b: number) {
    if (a > b) {
      return ['green', '30px', 'est  le Winner,congratulations']
    }
    else if (a < b) {
      return ['red', '50px', 'est le loser, Hard luck']
    } else {
      return ['blue', '50px', 'Null Match']

    }
  }

  getAllMatche() {
    this.matchService.getAllMatches().subscribe((res) => {
      this.matcheTab = res.matches
    })
  }

  display(id: number) {
    this.router.navigate([`matchinfo/${id}`])

  }

  goToEdit(id: number) {
    this.router.navigate([`edit-match/${id}`])
    
   
  }

  delete(id: number) {
    this.matchService.deleteMatches(id).subscribe((result) => {
      this.getAllMatche()
      this.msg = result.message
      alert('deleted')
    })

  }
}

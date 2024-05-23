import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm !:FormGroup
  id!:number;
match:any;
matcheTab = [
  { id: 1, scoreOne: 3, teamOne: 'RMD', scoreTwo: 2, teamTwo: 'FCB' },
  { id: 2, scoreOne: 5, teamOne: 'JUV', scoreTwo: 3, teamTwo: 'ROM' },
  { id: 3, scoreOne: 3, teamOne: 'CHE', scoreTwo: 3, teamTwo: 'PSG' }
  
];
  constructor(private fBuilder:FormBuilder) {
   
   }
foundMatch :any = [];
  ngOnInit() {
    this.searchForm = this.fBuilder.group({
      search:['',Validators.required]
    });
    
  }
  search(){
   let scoreValue = this.searchForm.value.search;
   let foundMatch :any = [];
   this.foundMatch = this.matcheTab.filter((m:any) => m.scoreOne == scoreValue || m.scoreTwo == scoreValue) 
  }
}

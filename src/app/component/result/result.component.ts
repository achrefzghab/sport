import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // obj result param
@Input() obj:any;

  constructor() { }

  ngOnInit(): void {
  }
scoreColor(score1:number,score2:number){
  if (score1 > score2) {
    return ['green',' Win']
    
  } else if(score1 < score2){
    return ['aqua',' Lose']
  }
else {
  return ['blue',' Drow']
}
 
}
}



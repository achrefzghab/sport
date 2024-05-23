import { IMAGE_LOADER } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  infoTab = [
    { tilte: "romulo", Finame:"football", date:"15-01-1989", image:'assets/images/img_1.jpg', avatar: "assets/images/person_1.jpg" },
    { tilte: "romulo", Finame:"football", date:"15-01-1989", image:'assets/images/img_2.jpg', avatar: "assets/images/person_2.jpg" },
    { tilte: "romulo", Finame:"football", date:"15-01-1989", image:'assets/images/img_3.jpg', avatar: "assets/images/person_3.jpg" },
    { tilte: "romulo", Finame:"football", date:"15-01-1989", image:'assets/images/img_1.jpg', avatar: "assets/images/person_3.jpg" }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

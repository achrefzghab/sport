import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articleTab = [
  {img:"assets/images/img_1.jpg",date:"15-01-1989",title:"titre1",dis:"bonjour tous les mondes"},
  {img:"assets/images/img_2.jpg",date:"15-01-1990",title:"titre2",dis:"bonjour tous les mondes"},
  {img:"assets/images/img_3.jpg",date:"15-01-1991",title:"titre3",dis:"bonjour tous les mondes"},
  {img:"assets/images/img_2.jpg",date:"15-01-1992",title:"titre4",dis:"bonjour tous les mondes"},
  {img:"assets/images/img_3.jpg",date:"15-01-1993",title:"titre5",dis:"bonjour tous les mondes"}
]
  constructor() { }

  ngOnInit(): void {
  }

}

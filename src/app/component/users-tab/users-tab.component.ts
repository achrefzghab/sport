import { Component, OnInit } from '@angular/core';
import { deletePos } from 'src/app/genralFunction/delete';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
  usersTab :any =[];
  constructor() { }

  ngOnInit() {
    this.usersTab = JSON.parse(localStorage.getItem('users') || '[]');
  }
  display(){}
  goToEdit(){}
  delete(id:any){
    deletePos(id,'users',this.usersTab)
  }
}

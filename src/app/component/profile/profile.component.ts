import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editProfile!: FormGroup;
  decoded: any = {};
  constructor(private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('jwt');
    if (token) {
      this.decoded = jwtDecode(token);
      console.log("here decoded token into profile", this.decoded);

    }
    this.editProfile = this.fBuilder.group({
      tel: [''],
      oldPwd: [''],
      newPwd: ['']
    });
  }
  edit(){
    
  }

}

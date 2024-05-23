import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  loginForm !: FormGroup;
  erreurMsg:any;
  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logIn() {
    console.log('here', this.login);
    this.userService.login(this.login).subscribe((data) => {
      console.log('here response after login', data);
      if (data.message == "Welcome") {
        sessionStorage.setItem("jwt",data.user);
        let decoded:any = jwtDecode(data.user);
        console.log('here response after login', decoded);

        if (decoded.role == 'admin') {
          this.router.navigate(['admin']);

        } else {
          this.router.navigate(['']);

        }

      } else {
        this.erreurMsg = 'please check your Email/pwd'

      }
    })

  }

}

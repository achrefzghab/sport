import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generateId } from 'src/app/genralFunction/genericFunction';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  path !: string;
  title: string = ''
  signupForm !: FormGroup;
  msg: any = '';
  imagePreview: any;
  constructor(private fBuilder: FormBuilder, private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.path);

    this.signupForm = this.fBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)//,Validators.maxLength(15),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]],
      tel: [''],
      img: [''],
    })
    this.title = (this.path == '/inscription') ? "Sign Up Client" : "Sign Up Admin"

  }
  signup() {

    let user = this.signupForm.value;
    if (this.path == "/inscription") {
      user.role = ' client'
    }
    else {
      user.role = 'admin'
    }
    this.userService.signup(user, this.signupForm.value.img).subscribe((res) => {
      this.msg = res.message
    })

  }

  onImageSelected(event: Event) {
    // const file = (event.target as HTMLInputElement).files[0];
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length
      > 0) {
      const file = inputElement.files[0];
      console.log('here selected file', file);

      this.signupForm.patchValue({ img: file });
      this.signupForm.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}

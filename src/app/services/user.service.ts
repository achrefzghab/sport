import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/api/users'
  constructor(private httpClient: HttpClient) { }

  signup(userObj: any,img:File) {
    let formData = new FormData();
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("pwd", userObj.pwd);
    formData.append("role", userObj.role);
    formData.append("img", img);
    return this.httpClient.post<{ message: any }>(this.url + '/signup', formData)

  }
  login(userObj: any) {
    return this.httpClient.post<{ message: any, user:any }>(this.url + '/login', userObj)
  }
}

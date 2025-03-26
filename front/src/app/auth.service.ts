import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  avatar: string | undefined;
  email: string = '';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email:string, password:string ): Subscription {
    return this.http.post<User>('http://localhost:3000/dashboard/auth/login', {email, password}, {
      headers: {
        access: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiIsImtpZCI6IjNkMzdlZTAyN2MwNzZkMTE4OGEzNmUwYTg4NTliMjU3In0.eyJuYW1lIjoiU2Vzc2lvbl9TVVBFUl9BRE1JTiIsImlhdCI6MTc0Mjk3MzgwNn0.ASG2EbOCRRggBxPDWkJPRFDNDsCyhUkLiFVFPlj6OwaD9yr02gmgpcZ16DC34qTu8kawo9YyIhrVGTbwzUbLH6fUAZm60AQ9elCutbrsTCmUZZV9l05G27X4z8kQkC_N4Y-lrByO_-DqXHjsWWdku2EK_417ZVsX3bDO3aQtpc9FyWdy"
      },
    })
    .subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      this.avatar = res.data.user.avatar;
      this.email = res.data.user.email.toString();
      localStorage.setItem('token', res.data.token);
      this.router.navigateByUrl('dashboard').then();
    });
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}

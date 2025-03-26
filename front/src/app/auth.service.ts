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
        access: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiIsImtpZCI6IjNkMzdlZTAyN2MwNzZkMTE4OGEzNmUwYTg4NTliMjU3In0.eyJuYW1lIjoiU2Vzc2lvbl9TVVBFUl9BRE1JTiIsImlhdCI6MTc0Mjk3MzgwNn0.AQZDEtiLB4CGQeP8McxQgGVgETimKH-iJ6U-QxWlbkmwCITDVEUb8JqvZNUBZQZdZMYbzVeNI12HKM8Ck4poY6e6ABg4JgUuhLUZ-x8qCVqzmzb9XkabXbq2zXjMvYwDPLjFWvCp2Y6-bsKMFCVwv9KDQ2LzWZ_3qmUuhPNGsHRkhChi"
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

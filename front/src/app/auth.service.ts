import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email:string, password:string ): Subscription {
    return this.http.post<User>('http://localhost:3000/dashboard/auth/login', {email, password})
    .subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      this.router.navigateByUrl('dashboard').then();
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then();
  }
}

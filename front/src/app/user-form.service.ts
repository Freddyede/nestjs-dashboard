import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  user: FormGroup;
  constructor(
    protected fb:FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {

    this.user = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      roleName: ['',Validators.required],
    });
  }

  /**
   * Validate session formulaire
   * @version 1.0.0
   * @author Patouillard Franck<patouillardfranck.development@gmail.com>
   */
  validate() {
    const tokenStorage = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');
    const userStorageObject = userStorage ? JSON.parse(userStorage) : undefined;
    console.log(this.user.value);
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenStorage}`,
      'Access': userStorageObject.roles.access_token,
      'Content-Type': 'application/json'
    });
    this.http.post<User>('http://localhost:3000/dashboard/auth/register', this.user.value, {headers: headers}).subscribe((res: any) => {
      if (res.status === 201 && res.message === 'User registered successfully!') {
        this.router.navigateByUrl('dashboard/authentications/list').then();
      }
    })
  }
  getUsers()  {
    const tokenStorage = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');
    const userStorageObject = userStorage ? JSON.parse(userStorage) : undefined;
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenStorage}`,
      'Access': userStorageObject.roles.access_token,
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:3000/users/list', {headers: headers});
  }
}

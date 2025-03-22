import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  user: FormGroup;
  constructor(
    protected fb:FormBuilder,
    private http: HttpClient
  ) {

    this.user = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      roleName: ['',Validators.required]
    });
  }

  /**
   * Validate session formulaire
   * @version 1.0.0
   * @author Patouillard Franck<patouillardfranck.development@gmail.com>
   */
  validate() {
    const headers = new HttpHeaders();
    const tokenStorage = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');
    const userStorageObject = userStorage ? JSON.parse(userStorage) : undefined;
    if (tokenStorage && userStorage) {
      headers.set('Authorization', tokenStorage);
      headers.set('Access', JSON.stringify(userStorageObject.roles));
    }
    console.log(this.user.value);
    this.http.post<User>('http://localhost:3000/dashboard/auth/login', this.user.value, {headers: headers}).subscribe((res: any) => {
      console.log(res);
    })
  }
}

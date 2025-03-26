import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  role: FormGroup;
  roles: any | undefined = undefined;
  validation: boolean = false;
  constructor(
    protected fb:FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.getDataRoles();
    this.role = this.fb.group({
      name: ['',Validators.required],
      access_token: ['',Validators.required],
    });
  }
  getDataRoles() {
    const tokenStorage = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');
    const userStorageObject = userStorage ? JSON.parse(userStorage) : undefined;
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenStorage}`,
      'Access': userStorageObject.roles.access_token,
      'Content-Type': 'application/json'
    });
    this.http.get('http://localhost:3000/dashboard/roles', {headers: headers}).subscribe(
      (res: any) => this.roles = res.data
    );
  }
  getRoles() {
    return this.roles;
  }
  deleteRole(id: string) {
    const tokenStorage = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');
    const userStorageObject = userStorage ? JSON.parse(userStorage) : undefined;
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenStorage}`,
      'Access': userStorageObject.roles.access_token,
      'Content-Type': 'application/json'
    });
    return this.http.delete(`http://localhost:3000/dashboard/roles/${id}`, {headers: headers}).subscribe((res: any) => {
      if (res.status === 204 && res.message === 'Role deleted successfully.') {
        window.location.reload();
      }
    });
  }
  validateRole() {
    const tokenStorage = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');
    const userStorageObject = userStorage ? JSON.parse(userStorage) : undefined;
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenStorage}`,
      'Access': userStorageObject.roles.access_token,
      'Content-Type': 'application/json'
    });
    this.http.post<User>('http://localhost:3000/dashboard/roles/add', this.role.value, {headers: headers}).subscribe((res: any) => {
      if (res.status === 201 && res.message === 'Role added successfully.') {
        this.role.reset();
        this.router.navigateByUrl('dashboard/roles').then();
        this.validation = true;
      }
    })
  }

}

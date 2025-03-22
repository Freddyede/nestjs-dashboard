import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  user: FormGroup;
  constructor(
    protected fb:FormBuilder,
  ) {

    this.user = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      roleName: ['',Validators.required],
      roleType: ['',Validators.required],
      accessType: ['',Validators.required],
    });
  }

  /**
   * Validate session formulaire
   * @version 1.0.0
   * @author Patouillard Franck<patouillardfranck.development@gmail.com>
   */
  validate() {
    console.log(this.user.value);
  }
}

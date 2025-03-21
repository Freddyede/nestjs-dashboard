import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserFormService} from '../../../user-form.service';

@Component({
  selector: 'app-session',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './session.component.html',
  styleUrl: './session.component.less'
})
export class SessionComponent {
  constructor(public userFormService: UserFormService) {
  }
}

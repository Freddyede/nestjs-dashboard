import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RolesService} from '../../roles.service';

@Component({
  selector: 'app-roles-added',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './roles-added.component.html',
  styleUrl: './roles-added.component.less'
})
export class RolesAddedComponent {
  constructor(public roleService: RolesService) {
  }
}

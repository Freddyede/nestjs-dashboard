import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RolesService} from '../../roles.service';

@Component({
  selector: 'app-roles',
  imports: [
    RouterLink
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.less'
})
export class RolesComponent {
  constructor(public roleService: RolesService) {
    if (roleService.validation) {
      window.location.reload();
    }
  }
}

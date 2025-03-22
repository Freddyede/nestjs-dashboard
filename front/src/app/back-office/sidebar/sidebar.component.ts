import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../auth.service';
import {RouterService} from '../../router.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less'
})
export class SidebarComponent {
  constructor(protected authService: AuthService, protected routerService: RouterService) { }
  getEmail(): string {
    const userString: string | null = localStorage.getItem('user');
    const user = userString !== null && JSON.parse(userString);
    return user.email;
  }
}

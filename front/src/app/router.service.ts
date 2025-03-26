import { Injectable } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      this.activatedRoute(event.url);
    });
  }
  dashboard: boolean = false;
  streaming: boolean = false;
  messagerie: boolean = false;
  clients: boolean = false;
  roles: boolean = false;
  plugins: boolean = false;
  auth: boolean = false;
  activateDashboard() {
    this.dashboard = true;
  }

  activateAuthentication() {
    this.auth = true;
  }

  activateMessagerie() {
    this.messagerie = true;
  }
  activateStreaming() {
    this.streaming = true;
  }
  activateClients() {
    this.clients = true;
  }
  activateRoles() {
    this.roles = true;
  }
  activatePlugins() {
    this.plugins = true;
  }
  disableAll() {
    this.dashboard = false;
    this.streaming = false;
    this.messagerie = false;
    this.clients = false;
    this.plugins = false;
    this.roles = false;
    this.clients = false;
    this.auth = false;
  }

  activatedRoute(url: string) {
    this.disableAll();
    if(url === '/dashboard') {
      this.activateDashboard();
    } else if(
      url.startsWith('/dashboard/authentications/list') || url.startsWith('/dashboard/authentications/session')) {
      this.activateAuthentication();
    } else if (url.startsWith('/dashboard/clients')) {
      this.activateClients();
    } else if (url.startsWith('/dashboard/messagerie')) {
      this.activateMessagerie();
    } else if (url.startsWith('/dashboard/streaming')) {
      this.activateStreaming();
    } else if (url.startsWith('/dashboard/roles')){
      this.activateRoles();
    }else if (url.startsWith('/dashboard/plugins')) {
      this.activatePlugins();
    }
  }
}

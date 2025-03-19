import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.activatedRoute(event.url);
    });
  }
  dashboard: boolean = false;
  streaming: boolean = false;
  messagerie: boolean = false;
  clients: boolean = false;
  plugins: boolean = false;

  activateDashboard() {
    this.dashboard = true;
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
  activatePlugins() {
    this.plugins = true;
  }
  disableAll() {
    this.dashboard = false;
    this.streaming = false;
    this.messagerie = false;
    this.clients = false;
    this.plugins = false;
    this.clients = false;
  }

  activatedRoute(url: string) {
    if(url === '/dashboard') {
      this.disableAll();
      this.activateDashboard();
    } else if (url.startsWith('/dashboard/clients')) {
      this.disableAll();
      this.activateClients();
    } else if (url.startsWith('/dashboard/messagerie')) {
      this.disableAll();
      this.activateMessagerie();
    } else if (url.startsWith('/dashboard/streaming')) {
      this.disableAll();
      this.activateStreaming();
    } else if (url.startsWith('/dashboard/plugins')) {
      this.disableAll();
      this.activatePlugins();
    }
  }
}

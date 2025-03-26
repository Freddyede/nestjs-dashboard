import { Routes } from '@angular/router';
import { HomeComponent } from './front-office/home/home.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { MessagerieComponent } from './back-office/messagerie/messagerie.component';
import { PluginsComponent } from './back-office/plugins/plugins.component';
import { StreamingComponent } from './back-office/streaming/streaming.component';
import { boClientsRoutes } from './back-office/bo-clients/bo-clients.routes';
import { authenticationRoutes } from './back-office/authentications/authentications.routes';
import {RolesComponent} from './back-office/roles/roles.component';
import {RolesAddedComponent} from './back-office/roles-added/roles-added.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'dashboard/streaming', component: StreamingComponent, canActivate: [authGuard] },
  { path: 'dashboard/messagerie', component: MessagerieComponent, canActivate: [authGuard] },
  ...boClientsRoutes,
  ...authenticationRoutes,
  { path: 'dashboard/plugins', component: PluginsComponent, canActivate: [authGuard] },
  { path: 'dashboard/roles', component: RolesComponent, canActivate: [authGuard] },
  { path: 'dashboard/roles/add', component: RolesAddedComponent, canActivate: [authGuard] },
];

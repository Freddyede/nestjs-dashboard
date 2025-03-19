import {Routes} from '@angular/router';
import {authGuard} from '../../auth.guard';
import {ClientsUpdatedComponent} from './clients-details/clients-details.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientsCreatedComponent} from './clients-created/clients-created.component';
import {ClientsReadComponent} from './clients-read/clients-read.component';

export const boClientsRoutes: Routes = [
  { path: 'dashboard/clients', component: ClientsComponent, canActivate: [authGuard] },
  { path: 'dashboard/clients/-1', component: ClientsCreatedComponent, canActivate: [authGuard] },
  { path: 'dashboard/clients/read/:id', component: ClientsReadComponent, canActivate: [authGuard] },
  { path: 'dashboard/clients/:id', component: ClientsUpdatedComponent, canActivate: [authGuard] },
]

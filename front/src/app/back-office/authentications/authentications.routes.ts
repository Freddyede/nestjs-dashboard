import { Routes } from '@angular/router';
import { authGuard } from '../../auth.guard';
import { AuthenticationsComponent } from './authentications.component';
import {SessionComponent} from './session/session.component';

export const authenticationRoutes: Routes = [
  { path: 'dashboard/authentications/list', component: AuthenticationsComponent, canActivate: [authGuard] },
  { path: 'dashboard/authentications/session/add', component: SessionComponent, canActivate: [authGuard] },
]

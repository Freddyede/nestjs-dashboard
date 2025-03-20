import { Routes } from '@angular/router';
import { authGuard } from '../../auth.guard';
import { AuthenticationsComponent } from './authentications.component';

export const authenticationRoutes: Routes = [
  { path: 'dashboard/authentications/list', component: AuthenticationsComponent, canActivate: [authGuard] },
]

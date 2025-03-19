import { Routes } from '@angular/router';
import { authGuard } from '../../auth.guard';
import { AuthenticationsComponent } from './authentications.component';
import { typeRoutes } from './type/types.routes';

export const authenticationRoutes: Routes = [
  { path: 'dashboard/authentications/list', component: AuthenticationsComponent, canActivate: [authGuard] },
  ...typeRoutes,
]

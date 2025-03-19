import { Routes } from '@angular/router';
import { JwtComponent } from './jwt/jwt.component';
import { authGuard } from '../../../auth.guard';
import { XmlComponent } from "./xml/xml.component";
import { KeyPasswordComponent } from "./key-password/key-password.component";
import { InputPasswordComponent } from "./input-password/input-password.component";
import { DoubleAuthenticationsComponent } from "./double-authentications/double-authentications.component";
import {ValidationAdminComponent} from "./validation-admin/validation-admin.component";

export const typeRoutes: Routes = [
  { path: 'dashboard/authentications/type/jwt', component: JwtComponent, canActivate: [authGuard] },
  { path: 'dashboard/authentications/type/xml', component: XmlComponent, canActivate: [authGuard] },
  { path: 'dashboard/authentications/type/pak', component: KeyPasswordComponent, canActivate: [authGuard] },
  { path: 'dashboard/authentications/type/oauth', component: InputPasswordComponent, canActivate: [authGuard] },
  { path: 'dashboard/authentications/type/2fa', component: DoubleAuthenticationsComponent, canActivate: [authGuard] },
  { path: 'dashboard/authentications/type/va', component: ValidationAdminComponent, canActivate: [authGuard] },
]

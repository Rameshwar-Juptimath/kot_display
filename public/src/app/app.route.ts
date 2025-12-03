import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { KotComponent } from './kot/kot.component';
import { AuthGuardService } from './auth/auth-guard.service';

export const ROUTES: Routes = [
    { path: '',redirectTo:'login',pathMatch:'full' },
    {path:'login',component:LoginComponent,canActivate:[AuthGuardService]},
    {path:'kot',component:KotComponent,canActivate:[AuthGuardService]},
]
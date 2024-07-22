import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { VednorsComponent } from './vednors/vednors.component';
import { TestComponent } from './test/test.component';
import { PaymentsComponent } from './payments/payments.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`

    // {path: '**', component: LoginComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'admin/vendors', component: VednorsComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'payment', component: PaymentsComponent, canActivate: [AuthGuard]},
    // {path: 'test', component: TestComponent},

];

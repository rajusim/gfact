import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'signin' , pathMatch:'full'},
    {path: 'app', component: AppComponent },
    {path: 'signin', component: SigninComponent },
    {path: 'signup', component: SignupComponent },
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];

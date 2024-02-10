import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './components/app.component';

export const routes: Routes = [
    {path:'', redirectTo:'signin' , pathMatch:'full'},
    {path: 'signin', component: SigninComponent },
    {path: 'signup', component: SignupComponent }
];

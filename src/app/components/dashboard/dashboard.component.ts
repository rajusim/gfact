import { Component } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private auth: AuthorisationService,
    private router : Router) {}

  onSignOut() : void{
    this.auth.signOut();
  }
}

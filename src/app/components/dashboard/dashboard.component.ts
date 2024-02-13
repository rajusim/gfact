import { Component } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private auth: AuthorisationService) {}
  onSignOut() : void{
    this.auth.signOut();
  }
}

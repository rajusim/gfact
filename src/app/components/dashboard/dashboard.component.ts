import { Component } from '@angular/core';
import { AuthorisationService } from '../../services/authorisation.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public users:any =[];
  constructor(private auth: AuthorisationService,
              private userService: UsersService,
              private router : Router) {}

    ngOnInit()
    {
      this.userService.getUsers()
      .subscribe(res =>{
        this.users = res;
      })
    }
  onSignOut() : void{
    this.auth.signOut();
  }
}

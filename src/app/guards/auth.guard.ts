import { CanActivateFn } from '@angular/router';
import { Inject } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (Inject(AuthorisationService).isLoggedIn())
  { 
    return true;
  }else {
    return false;
  }
  };


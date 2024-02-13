import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthorisationService).isLoggedIn())
  { 
    return true;
  }else {
    return false;
  }
  };

  
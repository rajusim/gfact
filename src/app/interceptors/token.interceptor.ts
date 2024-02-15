import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
   const myToken = inject(AuthorisationService).getToken();
  if(myToken){
     req = req.clone({
        setHeaders: {Authorization: `Bearer ${myToken}`},
    });
  }    
  return next(req);
};

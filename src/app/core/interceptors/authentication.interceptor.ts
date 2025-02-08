import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  if(tokenService.hasToken()) {
    const token = tokenService.returnToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

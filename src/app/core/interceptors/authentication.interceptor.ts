import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  if(tokenService.possuiToken()) {
    const token = tokenService.retornarToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = true;

  if (!isLoggedIn) {
    console.log('Auth failed');
    router.navigate(['/']);
    return false;
  }

  console.log('Auth success');
  return true;
};

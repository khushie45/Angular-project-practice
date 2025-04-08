import { Injectable, inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  RedirectCommand,
  Router,
} from '@angular/router';

interface Hero {
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getHero(id: string) {
    return { name: `Superman-${id}` };
  }
}
export const UserResolver: ResolveFn<Hero> = (
  route: ActivatedRouteSnapshot,
) => {
  const router = inject(Router);
  const userService = inject(UserService);
  try {
    return userService.getHero(route.paramMap.get('id')!); //! ts will throw error without this because it will think id can be null
  } catch {
    return new RedirectCommand(router.parseUrl('/404'));
  }
};

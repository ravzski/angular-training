import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionService } from '../api/session.service';

@Injectable()
export class ActiveUserGuard implements CanActivate {
  user: any;
  constructor(
    private sessionService: SessionService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.sessionService.userSignedIn()) {
      this.router.navigate(['/login']);
    } else {
      return true;
    }
  }
}

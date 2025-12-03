import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (next.url[0].path == 'login' && window.localStorage.getItem('token')) {
      this.router.navigate(['/kot']);
    return false;
    }
    if (next.url[0].path == 'login' && !window.localStorage.getItem('token')) {
      // this.router.navigate(['/login']);
      return true;
    }
    if (next.url[0].path == '' && window.localStorage.getItem('token')) {
      this.router.navigate(['/kot']);
      return false;
    }
    if (next.url[0].path =='kot' && !window.localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return false;
    }
    if (window.localStorage.getItem('token')) {
      return true;
    }
    if (next.url[0].path != 'login' && !window.localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
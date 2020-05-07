import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private accountService: AccountService, private router: Router) {

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLogedIn();
        if (logged) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}
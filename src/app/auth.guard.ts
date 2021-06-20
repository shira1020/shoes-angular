import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable} from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{

        if( this.auth.isLogin())
        {
            return true
        }

        this.router.navigate(['/login'])

        return false
    }
}

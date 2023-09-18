import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";

@Injectable({
    providedIn: 'root'
})

export class AuthActivate implements CanActivate {

    constructor(private userService: UserService) {}
    // Този клас AuthActivate отиваме и го слагаме в рутера на User така canActivate: [AuthActivate] и в theme модула на addTheme също го добавяме;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userService.isLogged;
    }

}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoggedINService } from "./logged-in.service";


@Injectable({
    providedIn:"root"
})


export class AuthenticationGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log("Entered Authentication Guard")
        if (this.loggedIN.isUserLoggedIn()){
            return true
        } else {
            this.router.navigate(['/login'])
            return false
        }
        
     } 

constructor(private loggedIN:LoggedINService, private router:Router){

}

}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable({
    providedIn:'root'
})

export class canLeave implements CanDeactivate<IDeactivate> {
    canDeactivate(component: IDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean{
        
        return component.canExit()
    }

}

export interface IDeactivate{
    canExit():boolean   
}
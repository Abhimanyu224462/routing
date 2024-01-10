import { CanActivateFn } from '@angular/router';
import { LoggedINService } from '../guards/logged-in.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Route",route)
  console.log("state",state)

  const isUserLoggedIn = inject(LoggedINService).isUserLoggedIn()

  // const permitted = true

  // if (permitted){
  //   return true
  // } else {
  //   return false
  // }
  return true;
};

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedINService {

  constructor() { }

  isUserLoggedIn(){
    return false
  }
}

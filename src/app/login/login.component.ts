import { Component } from '@angular/core';
import { IDeactivate } from '../guards/canLeave.guard';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements IDeactivate{
 
    userRegForm!:FormGroup
 
  canExit(): boolean {
    if(this.userRegForm.dirty){
      const result = confirm("Bhai mehnat se bhara hai form, poora bhar le nahi to royega")
      return result
    } else {
   return true
    }
  }

ngOnInit(){
this.userRegForm = new FormGroup({
  email: new FormControl('',[]),
  password: new FormControl('',[])
})

}

}

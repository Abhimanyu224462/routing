import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-pass',
  templateUrl: './flight-pass.component.html',
  styleUrls: ['./flight-pass.component.css']
})
export class FlightPassComponent {

  constructor(private router:Router){

  }

redirectTo(){
this.router.navigate(['/cabs'])
}

}

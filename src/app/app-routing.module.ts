import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesComponent } from './buses/buses.component';
import { CabsComponent } from './cabs/cabs.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TrainsComponent } from './trains/trains.component';
import { ErrorComponent } from './error/error.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightPassComponent } from './flight-pass/flight-pass.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

const routes: Routes = [
  {path:'buses',component:BusesComponent},
  {path:'cabs', component:CabsComponent},
  {path:'flightList/:sourceName/:destName', component:FlightListComponent},
  {path:'flights',component:FlightsComponent, children:[
    {path:'flightBooking',component:FlightBookingComponent},
    {path:'flightPass', component:FlightPassComponent}
  ]},
  {path:'hotels',component:HotelsComponent},
  {path:'hotelList',component:HotelListComponent},
  {path:'trains',component:TrainsComponent},
  {path:'',redirectTo:'/trains', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

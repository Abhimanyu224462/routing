import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { TrainsComponent } from './trains/trains.component';
import { BusesComponent } from './buses/buses.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CabsComponent } from './cabs/cabs.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightPassComponent } from './flight-pass/flight-pass.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    TrainsComponent,
    BusesComponent,
    HotelsComponent,
    CabsComponent,
    ErrorComponent,
    FlightListComponent,
    FlightBookingComponent,
    FlightPassComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

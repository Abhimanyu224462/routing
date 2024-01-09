import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  room:string | null = null

  constructor(private activatedRoute:ActivatedRoute){
    this.room = this.activatedRoute.snapshot.queryParamMap.get('kholi')
  }


}

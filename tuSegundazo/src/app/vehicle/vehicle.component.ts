import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  private vehicles: Array<Vehicle>=[];
  constructor() { }

  ngOnInit() {
  }

}

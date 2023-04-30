import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles: Array<Vehicle>=[];
  public brandCounts : {[key: string]: number} = {};
  constructor(private vehicleService:VehicleService) { }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;

      for (const vehicle of vehicles) {
        if (this.brandCounts.hasOwnProperty(vehicle.marca)) {
          this.brandCounts[vehicle.marca]++;
        } else {
          this.brandCounts[vehicle.marca] = 1;
        }
      }
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

}

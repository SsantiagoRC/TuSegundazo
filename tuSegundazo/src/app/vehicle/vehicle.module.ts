import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { KeyValuePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleComponent],
  exports: [VehicleComponent],
  providers:[VehicleComponent, KeyValuePipe ]
})
export class VehicleModule { }

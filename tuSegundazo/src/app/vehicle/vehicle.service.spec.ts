/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { VehicleService } from './vehicle.service';
import { faker } from '@faker-js/faker';
import { VehicleComponent } from './vehicle.component';
import { DebugElement } from '@angular/core';
import { Vehicle } from './vehicle';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('Service: Vehicle', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ VehicleComponent ],
      providers: [ VehicleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let vehicles: Array<Vehicle> = [];
    for(let i = 0; i < 3; i++)
    {
      const vehicle =
      {
        id:faker.datatype.number(),
        marca:faker.vehicle.manufacturer(),
        linea:faker.vehicle.model(),
        referencia:faker.vehicle.type(),
        modelo:faker.datatype.number({ min: 2000, max: 2022 }),
        kilometraje:faker.datatype.number({ min: 0, max: 200000 }),
        color:faker.vehicle.color(),
        imagen:faker.image.transport()
      };

        component.vehicles.push(vehicle);
        fixture.detectChanges();
        debug = fixture.debugElement;
   }
  });

  it('should display a table with 3 rows', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeDefined();

    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(component.vehicles.length + 1);
  });
});

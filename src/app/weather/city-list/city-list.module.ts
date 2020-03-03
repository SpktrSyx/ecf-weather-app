import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListRoutingModule } from './city-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    CityListRoutingModule
  ]
})
export class CityListModule { }

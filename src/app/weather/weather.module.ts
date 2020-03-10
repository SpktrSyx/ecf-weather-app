import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { InputSearchComponent } from './input-search/input-search.component';
import { CityListComponent } from './city-list/city-list.component';


@NgModule({
  declarations: [
    WeatherComponent,
    CityListComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CityService } from '../shared/services/city.service';
import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements AfterViewInit {
  
  private weather: Weather;
  
  constructor(private cityService: CityService,
    private service: WeatherService) {
      this.service = service;
      this.weather = this.service.get();
  }

  ngAfterViewInit(): void {
    

  }
}
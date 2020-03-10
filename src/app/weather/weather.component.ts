import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CityService } from '../shared/services/city.service';
import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/models/weather.model';
import { PositionService } from '../shared/services/position.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements AfterViewInit {
  
  private weather: Weather;
  
  constructor(private cityService: CityService,
    private service: WeatherService,
    private positionService: PositionService) {
      this.service = service;
      this.weather = this.service.get();
    }

  ngAfterViewInit(): void {
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          
          this.positionService.retrieveByPosition(lat, lon)
            .subscribe(data => {
              this.weatherData = data;
              this.weatherService.create(this.weatherData);
              console.log(this.weatherData);
            });
    });
  //   function retrieveByCoords(){
  //     return new Promise((resolve, reject) => {
  //         navigator.geolocation.getCurrentPosition(
  //             (position) => { resolve(position) },
  //             (positionError) => { console.log(positionError) }
  //             );
  //             resolve(this.position); 
  //     })
  // }
  }
  
}
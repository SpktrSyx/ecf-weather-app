import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private city: City;

  constructor() {
    this.city = new City;
  }

  create(name: string, weatherData: Weather) {
    
    this.city.name = name;
    return this.city;
}  

  public get(): City {
    return this.city;
  }

  public set(city: City): void{
    this.city = city
  }
}

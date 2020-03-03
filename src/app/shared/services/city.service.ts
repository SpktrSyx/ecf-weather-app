import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private city: City;

  constructor() { }

  public get(): City {
    return this.city;
  }

  public set(city: City): void{
    this.city = city
  }
}

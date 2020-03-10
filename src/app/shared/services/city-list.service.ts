import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { HttpClient } from '@angular/common/http';
import { CityService } from './city.service';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  private cityList: City[] = [];
  
  constructor(
    private http: HttpClient,
    private cityService: CityService) {
  }
  

}

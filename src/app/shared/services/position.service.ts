import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiWeather } from 'src/environments/apiWeather';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private weather: Weather;
  constructor(private http: HttpClient) {
  }

  create(weatherData): Weather {
    this.weather.description = weatherData.weather[0].description;
    this.weather.humidity = weatherData.main.humidity;
    this.weather.wind = weatherData.wind.speed;
    this.weather.tempActual = weatherData.main.temp;
    this.weather.tempMax = weatherData.main.temp_min;
    this.weather.tempMin = weatherData.main.temp_max;
    this.weather.cityName = weatherData.name;
    return this.weather;
  }

  retrieveByPosition(lat, lon) {
    return this.http.get(`${apiWeather.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiWeather.apiKey}`)
  }
 
  get(): Weather {
    return this.weather;
  }
}
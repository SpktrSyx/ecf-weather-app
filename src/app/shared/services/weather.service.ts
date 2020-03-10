import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather.model';
import { apiWeather } from 'src/environments/apiWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: Weather;

  constructor(private http: HttpClient) {
    this.weather = new Weather;
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
  
  retrieveByName(name: string) {
    return this.http.get(`${apiWeather.apiUrl}/weather?q=${name}&units=metric&appid=${apiWeather.apiKey}`)
  }
  
  get(): Weather {
    return this.weather;
  }

}

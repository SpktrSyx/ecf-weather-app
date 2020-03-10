import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pollution } from '../models/pollution.model';
import { apiPollution } from 'src/environments/apiPollution';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {
  private pollution : Pollution

  constructor(private http: HttpClient) {
    this.pollution = new Pollution;
  }

  create(pollutionData): Pollution {
    this.pollution.fineParticule = pollutionData.data.iaqi.pm25 ? pollutionData.data.iaqi.pm25.v : "-";
    this.pollution.airQuality = pollutionData.data.aqi;
    this.pollution.ozone = pollutionData.data.iaqi.o3 ? pollutionData.data.iaqi.o3.v : "-";
    return this.pollution;
  }
  
  retrieveByName(name: string) {
    return this.http.get(`${apiPollution.apiUrl}/${name}/?token=${apiPollution.apiKey}`)
  }
  
  get() {
    return this.pollution;
  }
}
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { apiWeather } from 'src/environments/apiWeather';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private position: number;

  constructor(private http: HttpClient) {
     
  }

  getByPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    return this.http.get(`${apiWeather.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiWeather.apiKey}`)
  }

  // retrieveByCoords() {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => { resolve(position) },
  //       (positionError) => { console.log(positionError) }
  //     );
  //     resolve(this.position);
  //   })
  // }
 
}
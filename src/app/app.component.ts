import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CityService } from './shared/services/city.service';
import { WeatherComponent } from './weather/weather.component';
import { City } from './shared/models/city.model';
import { PositionService } from './shared/services/position.service';
import { WeatherService } from './shared/services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    ) {
      this.initializeApp();
      // const cities: City[] =[];
    }
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
                // if(name){
                // this.cityService = new CityService;
                // this.cityService.create(name);
                // console.log(name);
                // }
    });
  }
}

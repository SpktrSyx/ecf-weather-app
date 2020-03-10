import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WeatherModule } from './weather/weather.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityService } from './shared/services/city.service';
import { WeatherService } from './shared/services/weather.service';
import { PositionService } from './shared/services/position.service';
import { InputSearchComponent } from './weather/input-search/input-search.component';
import { CityListService } from './shared/services/city-list.service';
import { WeatherComponent } from './weather/weather.component';
import { PollutionService } from './shared/services/pollution.service';


@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    WeatherComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    WeatherModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService,
    CityService,
    CityListService,
    PositionService,
    PollutionService,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit, AfterViewInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { CityService } from 'src/app/shared/services/city.service';
import { City } from 'src/app/shared/models/city.model';
import { PollutionService } from 'src/app/shared/services/pollution.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements AfterViewInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public pollutionData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    private cityService: CityService,
    private pollutionService: PollutionService
    ) {
    this.weatherSearchForm = this.formBuilder.group({
      'city' : ['', Validators.required]
    });
   }

  ngAfterViewInit() {
    let city: City = this.cityService.get();
  }

  sendCity(formValues){
    this.cityService.set(formValues);
    this.weatherService
      .retrieveByName(formValues.city)
      .subscribe(data => {
        this.weatherData = data;
        this.weatherService.create(this.weatherData);
      });
      
    // this.pollutionService
    //   .retrieveByName(formValues.city)
    //   .subscribe(data => {
    //     this.pollutionData = data;
    //     console.log(this.pollutionData);
    //     this.pollutionService.create(this.pollutionData);
    //   });
    }
  }
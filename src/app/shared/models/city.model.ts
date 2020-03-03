import { Weather } from './weather.model';

export class City {

    public value: string;
    public zip: number;
    public country: string;
    public countryCode: string;
    public dayTime = "";
    public weather: Weather;

}
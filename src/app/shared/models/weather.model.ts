import { Pollution } from './pollution.model';
import { City } from './city.model';

export class Weather {

    public humidity: number;
    public wind: number;
    // public uv: number;
    public description: string;
    public cityName: string;
    public tempMin: string;
    public tempMax: string;
    public tempActual: string; 
    public pollution: Pollution;
}
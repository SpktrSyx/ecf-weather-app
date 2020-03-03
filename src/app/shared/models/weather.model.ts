import { Temperature } from './temperature.model';
import { Pollution } from './pollution.model';

export class Weather {

    public humidity: number;
    public wind: number;
    public uv: number;
    
    public pollution: Pollution;

    public temperature: Temperature;


}
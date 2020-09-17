import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { City } from '../classes/City';
import ITcities from '../assets/data/ITcities.json';
import { DayWeather } from 'src/classes/DayWeather';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {}

  getCities(){
    return new Observable<City[]>(
      observer => {
          observer.next(ITcities.map( entry => this.jsonEntryToCity(entry) ));
      });
  }

  getFilteredCities(filter: string){
    filter = filter.toLowerCase();
    if(filter == "") return this.getCities();
    return new Observable<City[]>(
      observer => {
          observer.next(
            ITcities.filter( entry => entry["city"].toLowerCase().startsWith(filter))
                    .map( entry => this.jsonEntryToCity(entry) ) 
          );
      });
  }

  getCityWeather(city_name: string){
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city_name},it&appid=${environment.OW_API_KEY}`;
    return this.http.get<{list:{weather,dt_txt:string}[]}>(url)
    .pipe(
      map( (weather_samples,idx) => {
        let samples = weather_samples.list.filter( sample => sample.dt_txt.endsWith("12:00:00"))
        return samples.map( 
          (sample, idx) => 
              new DayWeather(this.getDayName(idx),sample.weather[0].id,`http://openweathermap.org/img/wn/${sample.weather[0].icon}@2x.png`));
      })
    );
    
  }

  getDayName(idx: number){

    let map = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ]

    switch(idx){
      case 0: return "Today";
      case 1: return "Tomorrow";
      default: 
        let now = new Date();
        now.setDate(now.getDate() + idx);
        return map[now.getDay()];

    }
  }

  jsonEntryToCity(entry: any){
    return new City(entry["city"],"");
  }
}

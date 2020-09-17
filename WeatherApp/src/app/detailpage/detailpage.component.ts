import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DayWeather } from 'src/classes/DayWeather';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit, OnDestroy {

  city_id:string = null;
  week_weather: DayWeather[];

  city_service: CityService;

  cityWeatherSubscription: Subscription;
  routeParamsSubscription: Subscription;

  constructor(private http: HttpClient,private route: ActivatedRoute) {
    this.city_service = new CityService(http);
    this.cityWeatherSubscription = null;
    this.routeParamsSubscription = null;
    this.week_weather = [];
  }

  ngOnDestroy(): void {
    this.cityWeatherSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.paramMap.subscribe(
      params => {
        this.city_id = params.get("id");
      }
    )
    this.cityWeatherSubscription = this.city_service.getCityWeather(this.city_id).subscribe(
      data => this.week_weather = data
    )
  }

}

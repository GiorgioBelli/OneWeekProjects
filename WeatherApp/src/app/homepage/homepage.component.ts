import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { City } from 'src/classes/City';
import { CityService } from 'src/services/city.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  first_half_cities: City[];
  second_half_cities: City[];

  cities: City[];

  city_service: CityService;

  getCitiesSubscription: Subscription = null;
  getFilteredCitiesSubscription: Subscription = null;

  constructor(private http:HttpClient, private router: Router) {
    this.city_service = new CityService(http);
    this.cities = [];
    this.first_half_cities = [];
    this.second_half_cities = [];
    
  }
  ngOnDestroy(): void {
    if(this.getCitiesSubscription != null) this.getCitiesSubscription.unsubscribe();
    if(this.getFilteredCitiesSubscription != null) this.getFilteredCitiesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getCitiesSubscription = this.city_service.getCities().subscribe(
      ret => {
        this.cities = ret;
        this.first_half_cities = this.cities.slice(0,4);
        this.second_half_cities = this.cities.slice(4,8);
      }
    )
  }

  onSearchChange(value){ 
    this.getFilteredCitiesSubscription = this.city_service.getFilteredCities(value).subscribe(
      ret => {
        this.cities = ret;
        this.first_half_cities = this.cities.slice(0,4);
        this.second_half_cities = this.cities.slice(4,8);
      }
    )
  }

  onCardClick(city: City){
    this.router.navigate([`./${city.getName()}`,])
  }

}

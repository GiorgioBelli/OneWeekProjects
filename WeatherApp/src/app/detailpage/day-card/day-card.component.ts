import { Component, Input, OnInit } from '@angular/core';
import { DayWeather } from 'src/classes/DayWeather';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent implements OnInit {


  @Input() day_weather: DayWeather;

  constructor() {
    console.log(this.day_weather);
    
  }

  ngOnInit(): void {  
  }

}

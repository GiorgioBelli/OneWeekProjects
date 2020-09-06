import { Component } from '@angular/core';
import { DB } from 'src/classes/db';
import { Drink } from 'src/classes/drink';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrinkFiller';
  
  isStartPage: boolean = true
  db: DB = new DB();
  drink: Drink;

  constructor(){
  }
  
  startPressed(){
    this.isStartPage = false;
    this.drink = this.db.getRandomDrink();
  }

  backToStart(){
    this.isStartPage = true;
  }


}

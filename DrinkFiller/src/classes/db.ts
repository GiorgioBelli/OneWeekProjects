import { Drink } from './drink';

export class DB{

    drinks: Drink[] = [
        new Drink("Vodka", "orange"),
        new Drink("Gin", "blue"),
        new Drink("Mojito", "green"),
    ];

    constructor(){

    }

    getAllDrinks(){
        return this.drinks;
    }

    getRandomDrink(){
        let min = 0;
        let max = this.drinks.length;
        let random = Math.floor(Math.random() * (max - min) + min);
        
        // use this random to pick the n-th drink inside the array
        return this.drinks[random];

    }
}
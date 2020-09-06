import { Component, OnInit, Input } from '@angular/core';
import { Drink } from 'src/classes/drink';

@Component({
  selector: 'app-shot-glass',
  templateUrl: './shot-glass.component.html',
  styleUrls: ['./shot-glass.component.css']
})
export class ShotGlassComponent implements OnInit {

  @Input() drink: Drink = null;
  qt: number = 0.5;

  constructor() { }

  ngOnInit(): void {
    this.qt = Math.random();
  }



}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {

  @Output("onclick") pressionEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonPressed(){
    console.log("button pressed - emitted")
    this.pressionEmitter.emit(true);
  }

}

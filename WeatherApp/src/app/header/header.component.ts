import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() onsearchchange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSearchChange($event){
    this.onsearchchange.emit($event.target.value);
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/classes/Note';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  isOpen:boolean = true;

  @Input("notes") notes: Note[] = null;

  @Output("onItemSelected") cardClickEmitter: EventEmitter<{note:Note,idx:number}> = new EventEmitter<{note:Note,idx:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

  onCardClick(tuple:{note:Note,idx:number}){
    this.cardClickEmitter.emit(tuple);
  }


}

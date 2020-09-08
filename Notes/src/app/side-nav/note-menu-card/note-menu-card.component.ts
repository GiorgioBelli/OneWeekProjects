import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/classes/Note';

@Component({
  selector: 'app-note-menu-card',
  templateUrl: './note-menu-card.component.html',
  styleUrls: ['./note-menu-card.component.css']
})
export class NoteMenuCardComponent implements OnInit {

  @Input() note:Note;
  @Input() idx:number;

  @Output("onclick") onClickEmitter:EventEmitter<{note:Note,idx:number}> = new EventEmitter<{note:Note,idx:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onClickEmitter.emit(<{note:Note,idx:number}>{note:this.note,idx:this.idx});
  }

}

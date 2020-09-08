import { Component, OnInit } from '@angular/core';
import { Note } from 'src/classes/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Notes';

  note_list: Note[];

  focusedNote: Note;
  focusedNoteIdx: number;

  constructor(){
    this.note_list = [];
    this.focusedNote = null;
  }

  ngOnInit(): void {
  }

  addNote(note:Note){
    this.note_list.push(note);
  }

  noteUpdated(note:Note){
    this.note_list[this.focusedNoteIdx] = note;
    this.focusedNote = null;
    this.focusedNoteIdx = null
  }

  onMenuItemSelected(tuple:{note:Note,idx:number}){    
    this.focusedNote = tuple.note;
    this.focusedNoteIdx = tuple.idx;

    console.log(tuple);

  }

}

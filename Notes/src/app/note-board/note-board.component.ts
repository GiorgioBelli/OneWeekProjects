import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from 'src/classes/Note';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit, OnChanges {

  @Input() loaded_note: Note;
  note: Note = null;
  isLoaded: boolean = false;

  @Output("onsave") saveNoteEmitter: EventEmitter<Note> = new EventEmitter<Note>();
  @Output("onupdate") updateNoteEmitter: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() {
    if (this.isLoaded) this.note = new Note(this.loaded_note.title, this.loaded_note.text);
    else this.note = new Note("", "");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoaded = changes.loaded_note.currentValue != null;

    if (this.isLoaded) {
      this.note = new Note(changes.loaded_note.currentValue.title, changes.loaded_note.currentValue.text);
    }
    else { 
      this.note = new Note("", "");
    }
  }

  ngOnInit(): void {

  }

  onSaveButtonClick() {
    this.isLoaded = this.loaded_note != null

    if (this.isLoaded) {      
      this.updateNoteEmitter.emit(new Note(this.note.title, this.note.text))
    } else {
      let newNote = new Note(this.note.title, this.note.text);
      newNote.save();
      this.saveNoteEmitter.emit(newNote);
    }

    this.note.clean();
  }

  onDeleteButtonClick() {
    this.note.clean();
  }

}

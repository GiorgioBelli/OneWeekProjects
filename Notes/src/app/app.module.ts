import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NoteBoardComponent } from './note-board/note-board.component';
import { NoteMenuCardComponent } from './side-nav/note-menu-card/note-menu-card.component';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NoteBoardComponent,
    NoteMenuCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

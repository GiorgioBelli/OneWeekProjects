import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMenuCardComponent } from './note-menu-card.component';

describe('NoteMenuCardComponent', () => {
  let component: NoteMenuCardComponent;
  let fixture: ComponentFixture<NoteMenuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteMenuCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

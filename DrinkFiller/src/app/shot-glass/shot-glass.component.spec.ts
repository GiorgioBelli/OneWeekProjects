import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotGlassComponent } from './shot-glass.component';

describe('ShotGlassComponent', () => {
  let component: ShotGlassComponent;
  let fixture: ComponentFixture<ShotGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

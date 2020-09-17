import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAnimatedCloudsComponent } from './bg-animated-clouds.component';

describe('BgAnimatedCloudsComponent', () => {
  let component: BgAnimatedCloudsComponent;
  let fixture: ComponentFixture<BgAnimatedCloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgAnimatedCloudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgAnimatedCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

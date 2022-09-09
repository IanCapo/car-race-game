import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceTrackFieldComponent } from './race-track-field.component';

describe('RaceTrackFieldComponent', () => {
  let component: RaceTrackFieldComponent;
  let fixture: ComponentFixture<RaceTrackFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceTrackFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceTrackFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceTrackComponent } from './race-track.component';

describe('RaceTrackComponent', () => {
  let component: RaceTrackComponent;
  let fixture: ComponentFixture<RaceTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

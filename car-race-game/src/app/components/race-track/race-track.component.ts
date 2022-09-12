import { Component, OnInit } from '@angular/core';
import { RaceTrackField }  from '../../RaceTrackField';

@Component({
  selector: 'app-race-track',
  templateUrl: './race-track.component.html',
  styleUrls: ['./race-track.component.sass']
})

export class RaceTrackComponent implements OnInit {
  public raceTrackFields: RaceTrackField[] = [];
  private numberOfFields = 10;
  constructor() { }

  ngOnInit(): void {
    for(let p = 1; p <= 2; p++) {
    for(let i = 1; i <= this.numberOfFields; i++) {
      let field: RaceTrackField = {id: i, playerId: p};
      this.raceTrackFields.push(field);
    }
  }
    console.log('race-track-fields', this.raceTrackFields);
  }
}

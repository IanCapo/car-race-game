import { Component, OnInit, Input } from '@angular/core';
import { RaceTrackField }  from '../../Interfaces/RaceTrackField';
import { Player } from '../../Interfaces/Player';

@Component({
  selector: 'app-race-track',
  templateUrl: './race-track.component.html',
  styleUrls: ['./race-track.component.sass']
})

export class RaceTrackComponent implements OnInit {
  @Input() player: Player = {};
  public raceTrackFields: RaceTrackField[] = [];
  private numberOfFields = 10;
  
  
  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i <= this.numberOfFields; i++) {
      let field: RaceTrackField = { fieldId: i, playerId: this.player.id };
      this.raceTrackFields.push(field);
    }
  }
}

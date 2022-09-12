import { RaceTrackField } from '../../Interfaces/RaceTrackField';
import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../Interfaces/Player';

@Component({
  selector: 'app-race-track-field',
  templateUrl: './race-track-field.component.html',
  styleUrls: ['./race-track-field.component.sass']
})
export class RaceTrackFieldComponent implements OnInit {
  @Input() field: RaceTrackField = {fieldId: 0};
  @Input() player: Player = {}

  constructor() { 
  
  }

  ngOnInit(): void {
    console.log(this.field.fieldId, this.player.id);

  }

}

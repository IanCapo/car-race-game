import { RaceTrackField } from './../../RaceTrackField';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-track-field',
  templateUrl: './race-track-field.component.html',
  styleUrls: ['./race-track-field.component.sass']
})
export class RaceTrackFieldComponent implements OnInit {
  @Input() field: RaceTrackField = {};

  constructor() { 
  
  }

  ngOnInit(): void {
    console.log(this.field);
    
  }

}

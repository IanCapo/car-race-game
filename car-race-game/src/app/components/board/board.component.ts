import { Component, OnInit } from '@angular/core';
import { Player } from '../../Interfaces/Player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  public players = [
    {id: 1, name: 'player1' , position: 0 },
    {id: 2, name: 'player2 ', position: 0 }
   ];

  constructor() { }

  ngOnInit(): void {
    this.setStep(1, 2)
  }

  public setStep(playerId: number, step: number) {
    if(playerId > 0) {
      this.players![playerId].position += step;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from '../../Interfaces/Player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  public players: Player[] = [];
  private NumberOfPlayers: number = 2;
  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i < this.NumberOfPlayers + 1; i++) {
      let p: Player = {id: i, name: 'player ' + i, position: 0 } 
      this.players.push(p)
    }
  }
}

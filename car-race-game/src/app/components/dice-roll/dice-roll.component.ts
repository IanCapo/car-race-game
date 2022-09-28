import { Component, OnInit } from '@angular/core';
import { playerTurn, playStatus } from 'src/app/Interfaces/PlayStatus';
import { PlayGroundService } from 'src/app/services/play-ground-service.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.sass'],
  animations: [
  ]
})
export class DiceRollComponent implements OnInit {

  shakeIt: boolean  = false;

  diceImages = [
    "../../../assets/dice_1.png",
    "../../../assets/dice_2.png",
    "../../../assets/dice_3.png",
    "../../../assets/dice_4.png",
    "../../../assets/dice_5.png",
    "../../../assets/dice_6.png"
  ];  

  diceToShow = this.diceImages[0];
  currentDice = 0

  playStatus?: playStatus;
  playerTurn?: playerTurn;
  
  constructor(private playStatusData: PlayGroundService) { }

  ngOnInit() {
    this.playStatusData.currentPlayStatus.subscribe(data => this.playStatus = data)
    this.playStatusData.currentPlayerTurn.subscribe(data => this.playerTurn = data)
  }

  shakeDice() {

    this.shakeIt = true;
    setTimeout(() => {
      this.currentDice = this.getRandomDice()
      this.diceToShow = this.diceImages[this.currentDice];
      this.shakeIt = false;

      if (this.playerTurn != null){
        this.newPlayerTurn({
          startPlay: true,
          isPlayer1Turn: this.playerTurn.isPlayer1Turn,
          isPlayer2Turn: this.playerTurn.isPlayer2Turn,
        })
      }

      if (this.playerTurn?.isPlayer1Turn){
        this.newPlayStatus({
          player1DiceScore: this.currentDice + 1,
          player2DiceScore: 0
        })
      } else if (this.playerTurn?.isPlayer2Turn){
        this.newPlayStatus({
          player1DiceScore: 0,
          player2DiceScore: this.currentDice + 1
        })
      }
    }, 1500);

  }

  getRandomDice(): number {
    return Math.floor(Math.random() * 6)
  }

  newPlayStatus(playStatus: playStatus){
    this.playStatusData.changePlayStatus(playStatus)
  }

  newPlayerTurn(playerTurn: playerTurn){
    this.playStatusData.changePlayerTurn(playerTurn)
  }

}
